import React, { useState } from 'react';

import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter,  IIgrapqlconnectiontoPeople } from '../../types';

type Props = {
  IgrapqlconnectiontoPeople: IIgrapqlconnectiontoPeople;

};

type ExcludesFalse = <T>(x: T | null | undefined | false) => x is T;

export function Characters({ IgrapqlconnectiontoPeople }: Props): JSX.Element {

  const [loading, setLoading] = useState<boolean>(false);

  const [characters, setCharacters] = useState<Array<ICharacter>>(IgrapqlconnectiontoPeople?.allPeople?.people ?? [],);
  
  const [nextPage, setNextPage] = useState<string | null>(IgrapqlconnectiontoPeople?.allPeople?.pageInfo.endCursor ?? '',);

  const [hasNext, setNext] = useState<boolean>(true);


  /*
  Sækjum fleiri einstaklinga til viðbótar við þá sem birtast nú þegar
  */

  const fetchMorePeople = async (): Promise<void> => {
    // (sjá pageInfo.hasNextPage) með cursor úr pageInfo.endCursor
    // byrjum á að setja inn loading 
    setLoading(true);

    const url = `/api/characters?after=${nextPage}`;

    let data = null;
    let result = null;

  try {
    result = await fetch(url);
  } catch (e) {
    console.error('Error fetching from SWAPI From character file', e);
    throw e;
  }

  if (!result.ok) {
    console.info(await result.text());
    throw new Error(`Error fetching from SWAPI, non 200 status from character file: ${result.status}`);
  }

  const json = await result.json();

  const response:  IIgrapqlconnectiontoPeople = json;

  //Sækjum gögn frá /pages/character til að sækja fleiri characera 
  setCharacters([...characters, ...response.allPeople?.people ?? []]);
  // (sjá pageInfo.hasNextPage) með cursor úr pageInfo.endCursor
  setNextPage(response.allPeople?.pageInfo.endCursor ?? '');
  setNext(response.allPeople?.pageInfo?.hasNextPage ?? true);

  setLoading(false);

  };
  /*
  * Hjálpar týpa ef við erum að filtera burt hugsanleg null gildi:
  */
 
  characters.map((character) => {
    if (!character) {
      return null;
    }
    return character;
  }).filter((Boolean as unknown) as ExcludesFalse);

  return (
    <section className={s.characters}>
      <ul className={s.characters__listofcharacters}>
        {characters.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>

      <Button disabled={loading} onClick={fetchMorePeople}>Fetch more</Button>
    </section>
  );
}

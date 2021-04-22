import Link from 'next/link';

import s from './Film.module.scss';
import { IFilm } from '../../types';

type Props = {
  film: IFilm
};

export function Film({ film }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__titleofFilm}>Episode {film.episodeID}: {film.title} </h2>
      <div className={s.film__contentOfInfoforthefilm}>
        <pre className={s.film__openingCrawlforfilm}><code>{film.openingCrawl}</code></pre>
        <div className={s.film_charecters}>
          <h3 className={s.film__charactersofilm}>Characters</h3>
          <div className={s.film__linksofcharackterforfilm}>
            {film.characterConnection.characters.map((character, i) => (
              <div key={i} className={s.film__linkofcharackterforfilm}>
                <Link href={`/characters/${character.id}`}>{character.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className={s.film__linebetweenfilms} />
    </section>
  );
}

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { Film } from '../components/film/Film';

import { Layout } from '../components/layout/Layout';
import { characterFragment } from '../graphql/characterFragment';
import { fetchSwapi } from '../lib/swapi';
import { IFilm, IgraphqlConnectiontoIFilms } from '../types';

export type PageProps = {
  films: Array<IFilm> | null;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const { films } = data;

  if (!films) {
    return (<p>error</p>);
  }

  return (
    <Layout>
      <Head>
        <title>Star Wars films</title>
      </Head>
      <h1>Star Wars films</h1>
      {films.map((film, i) => (
        <Film key={i} film={film} />
      ))}
    </Layout>
  );
}

/*
Fyrirspurnin sem við gerum á swapi-graphql til 
að sótt þær upplýsingar sem við þurfum í þetta verkefni
Sækjum allfilms sem er í raun tengingin við aðra lista
þar sækjum við fieldin films. Við sækjum films í stað edges
þar sem films er tenging semm er veitir þann eiginleika að hægt er að skoða
Api á fljótan hátt þar sem það er engin þörf fyrir okkur að sækja fyrst {edge {node}}
því er þessi eiginleiki hraðvirkari. Fyrir hverja mynd sækjum við titil, ID fyrir þáttinn,
og opening crawl sem er einhversknar lýsing á þáttinum. 
Við viljum líka sækja character í þáttunum sækjum því character connection, sem er tenging
yfir í allskonar lista. Þar er sækjum við einungis characters í viðkomandi mynd og 
sækjum hvern og einn karakter 

*/

const query = `
  query {
    allFilms {
      films {
        id
        episodeID
        title
        openingCrawl
        characterConnection {
          characters {
            ...character
          }
        }
      }
    }
  }
  ${characterFragment}
`;

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const films = await fetchSwapi<IgraphqlConnectiontoIFilms>(query);

  return {
    props: {
      films: films?.allFilms?.films ?? null,
    },
  };
};
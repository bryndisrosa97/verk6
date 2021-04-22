import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Characters } from '../../components/characters/Characters';

import { Layout } from '../../components/layout/Layout';
import { fetchCharacters } from '../../lib/swapi';
import { IIgrapqlconnectiontoPeople } from '../../types';

export type PageProps = {
  IgrapqlconnectiontoPeople: IIgrapqlconnectiontoPeople;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const { IgrapqlconnectiontoPeople } = data;
  return (
    <Layout>
      <Head>
        <title>Star Wars characters</title>
      </Head>
      <h1>Star Wars characters</h1>
      <Characters IgrapqlconnectiontoPeople={IgrapqlconnectiontoPeople} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  // TODO sækja karaktera
  const IgrapqlconnectiontoPeople = await fetchCharacters();

  return {
    props: {
      IgrapqlconnectiontoPeople: IgrapqlconnectiontoPeople,
    },
  };
};

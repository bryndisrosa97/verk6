// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti
// skoðum frá graphql.org/swa

// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)

/*
Byrjum með fyrstu tenginguna í swapi-graphql
*/

export interface IgraphqlConnectiontoIFilms {
  allFilms: IAllFilms;
}
/*
fylki með öllum bíómyndum
*/

interface IAllFilms {
  films: Array<IFilm>;
}

/**
 * Þær upplýsingar sem við viljum fá frá hverri mynd
 * ásamt tenginguna í þá karaktera í þeim
*/

export interface IFilm {
  id: string;
  episodeID: number
  title: string
  openingCrawl: string
  characterConnection: IcharacterConnection
}

/**
 * Tenging í characters
*/
export interface IcharacterConnection {
  characters: Array<ICharacter>
}

/**
 * Upplýsingarnar sem við þurfum um hvern
 * character frá swapi-grapql
*/

export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: number;
  eyeColor?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
}

export interface ICharacterSearchFromID {
  person?: ICharacter;
}

export interface ICharactersFromGraphQL {
  allPeople?: IAllPeople
}

/**
 * Tenging við alla karaktera
*/

export interface IIgrapqlconnectiontoPeople {
  allPeople: IAllPeople;
}

/**
 * Hér sækjum við bæði fylki með öllum characterunum
 * ásamt page info
*/

export interface IAllPeople {
  people: Array<ICharacter>;
  pageInfo: IPageInfo;
}

export interface IPageInfo {
  startCursor: string
  endCursor: string
  hasNextPage: boolean
}

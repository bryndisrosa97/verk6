// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti
// skoðum frá graphql.org/swa

export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: number;
  eyeColor?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
}

// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)

export interface ICharacterConnection {
  characters: Array<ICharacter>
}

export interface ICharacterSearch {
  person?: ICharacter;
}

export interface IFilm {
  id: string;
  episodeID: number
  title: string
  openingCrawl: string
  characterConnection: ICharacterConnection
}

interface IAllFilms {
  films: Array<IFilm>;
}

export interface IFilmsFromGraphQL {
  allFilms: IAllFilms;
}

export interface IPeopleResponse {
  allPeople: IAllPeople;
}

export interface IPageInfo {
  startCursor: string
  endCursor: string
  hasNextPage: boolean
}

export interface IAllPeople {
  people: Array<ICharacter>;
  pageInfo: IPageInfo;
}

export interface ICharactersFromGraphQL {
  allPeople?: IAllPeople
}
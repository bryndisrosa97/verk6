# Vefforritun 2, 2021, verkefni 6

## keyrsla á verkefninu 
Verkefnið er keyrt með að gera 
* npm install
* npm run dev


https://starwarsthemeapp.herokuapp.com

![image](https://github.com/bryndisrosa97/verk6/assets/61384036/1e96cca7-6fee-47c1-9b82-5c10a1e0b3bc)


Tengjast skal SWAPI GraphQL endapunkt og birta upplýsingar um Star Wars myndir (fyrstu sex) ásamt karakterum í þeim.

## GraphQL

Hægt er að nálgast GraphiQL viðmót til að skoða gögnin á https://graphql.org/swapi-graphql/

Endapunktur fyrir GraphQL API má nálgast á https://swapi-graphql.netlify.app/.netlify/functions/index

Ekki þarf að nota neitt annað en `POST` á endapunktinn með gögnum í querystring breytunum `query` og `variables`. Sjá gefinn grunn.

## TypeScript og týpur

Nota skal TypeScript og þær stillingar sem gefnar eru í `tsconfig.json` (sér í lagi skal `strict` vera `true`) og með eslint reglum í `.eslintrc.js`. Slökkva má á einstaka reglum ef ástæða er til.

Öll gögn skulu vera með týpum og þarf því að útbúa `type` eða `interface` fyrir gögn sem koma úr GraphQL.

## Síður, gögn og virkni

Í haus skulu vera hlekkir á `Films` (forsíða) og `Characters` (`/characters`).

Forsíða skal birta gögn úr `allFilms` í GraphQL API, sér í lagi `title`, `episodeID`, `openingCrawl` og þá karaktera sem koma fram í myndinni ásamt hlekk á nánari upplýsingar um viðkomandi. Sjá gefinn grunn.

`/characters` skal birta fyrstu 10 karaktera úr myndunum (`allPeople(first: 10)`) en einnig takka sem leyfir að sækja næstu 10 o.s.fr. þar til búið er að birta alla karaktera.

Ekki skal nota sama fall og síða (`/pages/characters/index.tsx`) heldur skal gera sérstakt `fetch` kall af framenda á bakenda gegnum `/pages/api/characters.ts`. Þetta þýðir að fyrstu gögnin verða _server-side renderuð_ og ekki bara aðgengileg af framenda eftir að React forrit keyrir.

`/characters/[id]` skal birta upplýsingar um valinn karakter (úr `person`) eða 404 villu. Birta skal a.m.k. `birthYear`, `eyeColor`, `hairColor`, `height` og `mass`.

## `getServerSideProps`

Þó svo að NextJS skjölun ýti mjög undir að `getStaticProps` sé notað, þá munum við nota `getServerSideProps` sem passar inn í umfjöllun áfangans. Það sem skilað er úr því falli verður útbúið á _bakenda_ (líkt og með Express) og gert aðgengilegt React forriti á _framenda_.

Við getum því gert köll í API/gagnagrunn innan `getServerSideProps` án þess að það keyri á framenda.

[Sjá nánar í skjölun](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).

## Útlit

[Sjá útlit](./utlit).

Setja skal upp Sass og útfæra útlit per component í Sass skrá fyrir hann.

## Tæki og tól

Gefinn er grunnur, með uppbyggingu á verkefni, byggt á `create-next-app` ásamt TypeScript. Reynt hefur verið að setja slatta af athugasemdum til að hjálpa við heildarskipulag og skilning.

Ekki ætti að þurfa að búa til fleiri componenta en það er leyfilegt. Ekki þarf að útbúa _container_ component, en það er leyfilegt.



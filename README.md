# Star Wars GraphQL Explorer

## Project Overview

The Star Wars GraphQL Explorer is a web application designed to retrieve and display information about the first six Star Wars movies and their characters. It connects to the SWAPI (Star Wars API) GraphQL endpoint to access this data.

## Technology Stack

The project is built using the following technologies:

- **GraphQL**: The application leverages GraphQL to efficiently fetch and present data. You can explore and query the available data using the GraphiQL interface [here](https://graphql.org/swapi-graphql/).

- **GraphQL API Endpoint**: The GraphQL API endpoint can be accessed at [https://swapi-graphql.netlify.app/.netlify/functions/index](https://swapi-graphql.netlify.app/.netlify/functions/index). Data is fetched from this endpoint by sending POST requests with query parameters "query" and "variables." A template for this is provided.

- **TypeScript and Types**: TypeScript is used throughout the project, with specific settings configured in `tsconfig.json`, including setting "strict" to true. Additionally, ESLint rules are applied, which can be customized as needed. Every piece of data is accompanied by corresponding types or interfaces, ensuring strong type-checking.

## Pages and Functionality

The Star Wars GraphQL Explorer includes the following main pages and functionality:

### Films (Homepage)

- This page displays data from the "allFilms" query in the GraphQL API.
- Information such as movie title, episode ID, opening crawl text, and a list of characters featured in the movie is presented.
- You can also find links to access detailed information about each character.

### Characters

- The "/characters" page displays the first 10 characters from the Star Wars universe (retrieved via "allPeople(first: 10)" GraphQL query).
- A button allows users to load the next set of 10 characters, and this process can be repeated until all characters are displayed.
- Importantly, a distinct fetch call is made from the frontend to the backend via "/pages/api/characters.ts" to retrieve data. This ensures that the initial data is server-side rendered for optimal performance.

### Character Details ("/characters/[id]")

- This page presents detailed information about a selected character.
- Key character attributes such as birth year, eye color, hair color, height, and mass are provided.
- In case a character is not found, a 404 error is displayed.

## Data Retrieval with getServerSideProps

- Instead of using getStaticProps, the Star Wars GraphQL Explorer employs getServerSideProps. This decision aligns with the course's recommendations and best practices.
- Data fetched within getServerSideProps is prepared on the server-side (similar to Express), enhancing data security and efficiency.

## Styling and Layout

- The project uses Sass for styling, following a component-based styling approach.
- To maintain clean and organized styling, separate Sass files are created for each component.

## Tools and Frameworks

- The foundation of the project is built on the create-next-app framework, enriched with TypeScript.
- The code includes comments and explanations to facilitate project understanding and maintainability.

Feel free to create additional components if needed, and while a container component is not mandatory, you are welcome to implement one as required.

## How to run the project
In order to run the project you have to include
* npm install
* npm run dev


https://starwarsthemeapp.herokuapp.com

![image](https://github.com/bryndisrosa97/verk6/assets/61384036/1e96cca7-6fee-47c1-9b82-5c10a1e0b3bc)







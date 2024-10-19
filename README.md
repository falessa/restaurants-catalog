# Table of contents:
- [Table of contents:](#table-of-contents)
  - [Instalation ](#instalation-)
  - [Execution ](#execution-)
  - [Tests ](#tests-)
  - [Generate types ](#generate-types-)
  - [Screenshots ](#screenshots-)

## Instalation <a name="installation"></a>

Install dependencies:

```
$ npm install
```

Create an `.env` file at the root directory. It must contain the following env variables:

```
REACT_APP_API_URL = "http://localhost:3001/graphql"
# REACT_APP_API_TOKEN = GENERATE A TOKEN KEY IN YELP DEVELOPERS TO GET ACCESS TO YELP API: https://www.yelp.com/developers/v3/manage_app
```

## Execution <a name="execution-"></a>

```
$ npm start
```

To run the backend, start the (restuarants-api-proxy service)[https://github.com/falessa/restaurant-api-proxy].  

## Tests <a name="tests"></a>

In the project directory, you can run:

```
$ npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**Rules:**

- Whenever possible tests will be written using built-in queries from the `screen` object provided by the React Testing library. [More info here.](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md)

## Generate types <a name="generate-types"></a>

```
$ npm run gen-types
```

Generate types automatically based on the `codegen.yml` configuration file. Generated types will be available at `src/generated/graphql.tsx`

## Screenshots <a name="screenshots-"></a>

![](./docs/screenshots/landing_page.png)
![](./docs/screenshots/search_page.png)

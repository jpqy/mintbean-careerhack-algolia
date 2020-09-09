# Algolia Pokedex

A Pokedex created with Algolia's web search product. Uses Algolia InstantSearch to allow for configurable and detailed display and searching of a Pokemon dataset.

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [What is Algolia?](#what-is-algolia)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
  - [`npm run algolia:import`](#npm-run-algoliaimport)
  - [`npm run algolia:config`](#npm-run-algoliaconfig)
  - [`npm run deploy`](#npm-run-deploy)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)

<!-- /code_chunk_output -->

## What is Algolia?

Instead of storing your data in a traditional database and then having to write complex queries to retrieve the data and then having to work out how to display it in your frontend, Algolia allows you to instead send data to their servers, configure the fields and indices declaratively, either online or via their SDK, and then consume it easily with their various frontend APIs.

- Try their [interactive tutorial](https://www.algolia.com/doc/onboarding/) to get started.
- Learn more about [setting up the Algolia backend](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/).
- Learn more about Algolia's [React components](https://www.algolia.com/doc/api-reference/widgets/react/).

## Setup

1. Run `npm install`

2. Run `cp .env.example .env` to make a copy of the `.env` file from the example.

3. [Create an Algolia account](https://www.algolia.com/users/sign_up) (a free student plan is available if you have the GitHub Student Developer Pack and login with GitHub).

4. Click "Create application" on Algolia and give any name to the initial index when prompted.

5. Click 'API Keys' and copy/paste the Application ID, Search-Only API Key, and Admin API Key into the `.env` file.

6. Run `npm run algolia:import` to run a file which imports a public Pokemon dataset into a "pokemon" index using the Algolia SDK.

7. Run `npm run algolia:config` to configure the dataset for queries.

8. Run `npm start`

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `npm run algolia:import`

Runs `bin/algolia/1-importPokemonDataset.js`, which imports a public Pokemon dataset into a "pokemon" index using the Algolia SDK.

### `npm run algolia:config`

Runs `bin/algolia/2-configurePokemonDataset.js`, which configures the "pokemon" index to allow for worthwhile queries.

### `npm run deploy`

Deploys the project to GitHub pages. Runs `npm run build` then pushes the contents of `build` into a `gh-pages` branch. Must enable GitHub pages in the repo settings.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

import React from "react";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
  Panel,
} from "react-instantsearch-dom";
import "./App.css";
import algoliasearch from "algoliasearch/lite";
import Stats from "./components/Stats.js";
import Content from "./components/Content";
import Facet from "./components/Facet";
const {
  REACT_APP_ALGOLIA_APPLICATION_ID,
  REACT_APP_ALGOLIA_PUBLIC_API_KEY,
} = process.env;

if (!REACT_APP_ALGOLIA_APPLICATION_ID || !REACT_APP_ALGOLIA_PUBLIC_API_KEY) {
  throw new Error(
    "Please configure the env variables [REACT_APP_ALGOLIA_APPLICATION_ID] and [REACT_APP_ALGOLIA_PUBLIC_API_KEY] in your .env file"
  );
}

const searchClient = algoliasearch(
  REACT_APP_ALGOLIA_APPLICATION_ID,
  REACT_APP_ALGOLIA_PUBLIC_API_KEY
);

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="pokemon">
      <main className="search-container">
        <Configure
          hitsPerPage={10}
          attributesToSnippet={[]}
          snippetEllipsisText=" [...]"
        />
        <div className="right-panel">
          <div id="hits">
            <Content />
          </div>
          <div id="searchbox">
            <SearchBox
              translations={{
                placeholder: "Search for your favourite Pokemon",
              }}
            />
          </div>
          <div id="stats">
            <Stats />
          </div>
          <div id="pagination">
            <Pagination />
          </div>
        </div>
        <div className="left-panel">
          <div id="type">
            <Panel header="Types">
              <Facet attribute="type" searchable={true} operator="and" />
            </Panel>
          </div>
          <div id="weaknesses">
            <Panel header="Weaknesses">
              <Facet attribute="weaknesses" searchable={true} />
            </Panel>
          </div>
        </div>
      </main>
    </InstantSearch>
  );
}

export default App;

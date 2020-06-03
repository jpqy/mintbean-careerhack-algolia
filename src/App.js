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
import Stats from "./Stats.js";
import RangeSlider from "./RangeSlider.js";
import Content from "./Content";
import Facet from "./Facet";
const APPLICATION_ID = "X2H6EHSA90";
const SEARCH_API = "ad06c17de6f6949cfc0f8ef3a7ba1616";
const searchClient = algoliasearch(APPLICATION_ID, SEARCH_API);

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
            {/* Uncomment the following widget to add hits list */}
            <Content />
          </div>
          <div id="searchbox">
            {/* Uncomment the following widget to add a search bar */}
            <SearchBox translations={{ placeholder: "Search for products" }} />
          </div>
          <div id="stats">
            {/* Uncomment the following widget to add search stats */}
            {/* <Stats /> */}
          </div>
          <div id="pagination">
            {/* Uncomment the following widget to add pagination */}
            {/* <Pagination /> */}
          </div>
        </div>
        <div className="left-panel">
          <div id="type">
            {/* Uncomment the following widget to add categories list */}
            <Panel header="Type">
              <Facet attribute="type" searchable={true} />
            </Panel>
          </div>
          <div id="weaknesses">
            {/* Uncomment the following widget to add brands list */}
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

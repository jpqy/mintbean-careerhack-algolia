import React from "react";
import { connectStateResults } from "react-instantsearch-dom";
export default connectStateResults(({ searchResults }) => {
  if (searchResults === null || searchResults.nbHits === 0) return <div />;
  return (
    <div className="ais-Stats">
      <img
        src="img/pokeball.png"
        role="img"
        aria-label="pokeball-icon"
        id="pokeball-icon"
      />{" "}
      <strong>{searchResults.nbHits}</strong> Pokemon found{" "}
      {searchResults.query !== "" && (
        <React.Fragment>
          for <strong>{`"${searchResults.query}"`}</strong>
        </React.Fragment>
      )}{" "}
      in <strong>{searchResults.processingTimeMS}ms</strong>
    </div>
  );
});

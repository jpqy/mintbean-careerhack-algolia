import React from "react";
import PropTypes from "prop-types";
import { Highlight, Snippet } from "react-instantsearch-dom";

export default Hit;

function Hit({ hit }) {
  return (
    <div className="hit">
      <div className="hit-image">
        <aside className="pokedex-number">{hit.id}</aside>
        <img src={hit.img} />
      </div>
      <div className="hit-content">
        <div>
          <div className="hit-name">
            <Highlight attribute="name" hit={hit} tagName="em" />
          </div>          
        </div>
        <div className="hit-type">{hit.type.join(", ")}</div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

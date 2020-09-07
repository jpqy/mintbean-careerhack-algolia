import React from "react";
import PropTypes from "prop-types";
import { Highlight } from "react-instantsearch-dom";
import Type from "./Type";
import { removeScheme } from "./helper";

export default function Hit({ hit }) {
  return (
    <div className="hit" key={hit.id}>
      <div className="hit-image">
        <aside className="pokedex-number">{hit.id}</aside>
        <img src={removeScheme(hit.img)} alt={hit.name} />
      </div>
      <div className="hit-content">
        <div>
          <div className="hit-name">
            <Highlight attribute="name" hit={hit} tagName="em" />
          </div>
        </div>
        <div className="types-container">
          <Type types={hit.type} />
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

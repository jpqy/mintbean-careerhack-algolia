import React from "react";

export default function Type({ types }) {
  return types.map(type => (
    <span className={"type type--" + type}>{type}</span>
  ));
}
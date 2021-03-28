import React from "react";

const Filter = ({ action, value }) => (
  <div>
    <span>Filter show With </span>
    <input onChange={(e) => action(e.target.value)} value={value} />
  </div>
);

export default Filter;

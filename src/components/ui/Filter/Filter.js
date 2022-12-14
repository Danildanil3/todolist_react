import React from "react";
import "./Filter.css";

function Filter({ onClick }) {
  const handlerAddFilter = (e) => {
    onClick();
  };

  return (
    <div className="filter">
      <label className="toggle">
        <input type="checkbox" className="filterCheckBox" />
        <span className="labels" data-on="UNDONE" data-off="ALL" onClick={handlerAddFilter}></span>
        <span className="tiptext">show undone | show all</span>
      </label>
    </div>
  );
}

export default Filter;

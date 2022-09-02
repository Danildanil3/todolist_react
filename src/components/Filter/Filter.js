import React, { useState } from "react";
import "./Filter.css";


function Filter(props) {
  return (
    <div className="filter">
      <label className="toggle">
        <input type="checkbox" className="filterCheckBox"/>
        <span className="labels" data-on="UNDONE" data-off="ALL"></span>
        <span className="tiptext">show undone | show all</span>
      </label>
    </div>
  );
}

export default Filter;

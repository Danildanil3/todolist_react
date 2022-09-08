import React from "react";
import { useDispatch } from "react-redux";
import {toggleFilterAction} from "../../../store/filter/reducer"
import "./Filter.css";

function Filter(props) {
  const dispatch = useDispatch();

  const toggleFilter = (e) => dispatch(toggleFilterAction());

  return (
    <div className="filter">
      <label className="toggle">
        <input type="checkbox" className="filterCheckBox" />
        <span className="labels" data-on="UNDONE" data-off="ALL" onClick={toggleFilter}></span>
        <span className="tiptext">show undone | show all</span>
      </label>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import "./List.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function List({ list, onClick, onDelete }) {
  const handlerChooseItem = (e) => {
    e.preventDefault();
    onClick(list.id);
  };

  const handlerDeleteList = (e) => {
    e.preventDefault();
    onDelete(list.id);
  };

  return (
    <li className="menu_item" key={list.id} onClick={handlerChooseItem}>
      {capitalizeFirstLetter(list.name)}
      <i className="delete_list" onClick={handlerDeleteList}></i>
    </li>
  );
}

export default List;

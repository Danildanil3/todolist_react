import React from "react";
import "./List.css";
import capitalizeFstLtr from "../../../utils/capitalizeFstLtr";

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
      {capitalizeFstLtr(list.name)}
      <i className="delete_list" onClick={handlerDeleteList}></i>
    </li>
  );
}

export default List;

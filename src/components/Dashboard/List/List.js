import React from "react";
import "./List.css";
import capitalizeFstLtr from "../../../utils/capitalizeFstLtr";
import { NavLink } from "react-router-dom";


function List({ list, onClick, onDelete, undone }) {
  const handlerChooseItem = (e) => {
    e.preventDefault();
    onClick(list.id);
  };

  const handlerDeleteList = (e) => {
    e.preventDefault();
    onDelete(list.id);
  };

  let name = capitalizeFstLtr(list.name);
  if (name.length > 13) name = name.slice(0, 12) + "...";

  return (
    <li className="menu_item" key={list.id} onClick={handlerChooseItem}>
      <NavLink to={`/todo-list/${list.id}`}>
      {name}({undone == undefined ? 0 : undone})
      </NavLink>
      <i className="delete_list" onClick={handlerDeleteList}></i>
    </li>
  );
}

export default List;

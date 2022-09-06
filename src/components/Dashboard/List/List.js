import React from "react";
import { NavLink } from "react-router-dom";
import "./List.css";
import capitalizeFstLtr from "../../../utils/capitalizeFstLtr";

function List({ list, undone, onClick, onDelete }) {
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

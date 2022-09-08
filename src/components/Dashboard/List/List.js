import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./List.css";
import capitalizeFstLtr from "../../../utils/capitalizeFstLtr";

function List({ list, onClick, onDelete }) {
  const undone = useSelector((state) => state.dashboard.openedTasks);

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
    <li className="menu_item" key={list.id}>
      <NavLink to={`/todo-list/${list.id}`}>
        {name}({undone[list.id]})
      </NavLink>
      <i className="delete_list" onClick={handlerDeleteList}></i>
    </li>
  );
}

export default List;

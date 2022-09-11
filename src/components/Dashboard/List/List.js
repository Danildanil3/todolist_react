import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Capitalize } from "../../../utils";
import { selectOpenedTasks } from "../../../store/selectors";
import "./List.css";

function List({ list, onDelete }) {
  const undone = useSelector(selectOpenedTasks);

  const handlerDeleteList = (e) => {
    e.preventDefault();
    onDelete(list.id);
  };

  let name = Capitalize(list.name);
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

import React from "react";
import "./List.css";
import capitalizeFstLtr from "../../../utils/capitalizeFstLtr";

function List({ list, onClick, onDelete }) {
  const handlerChooseItem = (e) => {
    e.preventDefault();
    document.querySelectorAll(`.menu_item`).forEach((item) => item.classList.remove("active"));
    document.querySelector(`.menu_item:nth-child(${list.id})`).classList.add("active");
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

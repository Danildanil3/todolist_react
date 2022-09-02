import React from "react";
import "./Sidebar.css";
import List from "../List/List";

function Sidebar({ lists, onClick, onDelete }) {
  const handlerChooseList = (obj) => {
    onClick(obj);
  };

  const handlerDeleteList = (id) => {
    onDelete(id);
  };

  return (
    <nav className="sidebar">
      <div className="head">
        <h1>Lists</h1>
        <div className="add_list">&#43;</div>
        <form action="submit" className="add_list_form">
          <input type="text" className="add_list_input" placeholder="List name" autoComplete="off" />
          <button type="submit">Push</button>
        </form>
      </div>
      <ul className="menu">
        {lists.map((obj) => (
          <List key={obj.id} list={obj} onClick={handlerChooseList} onDelete={handlerDeleteList} />
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;

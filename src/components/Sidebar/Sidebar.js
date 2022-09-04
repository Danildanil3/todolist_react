import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Sidebar.css";
import List from "./List/List";

function Sidebar({ lists, onClick, onDelete, onSubmit }) {
  const [formDisplay, setDisplay] = useState(false);
  const [listName, setName] = useState("");
  const inputRef = useRef();

  const handlerFormShown = () => {
    setDisplay((prevState) => !prevState);
  };

  const handlerChooseList = (id) => {
    onClick(id);
  };

  const handlerDeleteList = (id) => {
    onDelete(id);
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    if (listName.trim() !== "") {
      handlerFormShown();
      onSubmit(listName.trim());
    }
  };

  const formStyle = {
    display: formDisplay ? "block" : "none",
  };

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = null;
    setName("");
  }, [formDisplay]);

  return (
    <nav className="sidebar">
      <div className="head">
        <h1>Lists</h1>
        <div className="add_list" onClick={handlerFormShown}>
          &#43;
        </div>
        <form action="submit" className="add_list_form" onSubmit={handlerOnSubmit} style={formStyle}>
          <input
            type="text"
            value={listName}
            onChange={(e) => setName(e.target.value)}
            className="add_list_input"
            ref={inputRef}
            placeholder="List name"
            name="name"
            autoComplete="off"
          />
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

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLists from "../../hooks/useLists";
import "./Dashboard.css";
import List from "./List/List";

function Dashboard(props) {
  const count = useSelector(store => store.dashboard.today)
  const { lists, createList, deleteList } = useLists();
  const [listName, setName] = useState("");
  const [formDisplay, setDisplay] = useState(false);
  const inputRef = useRef();

  const formStyle = {
    display: formDisplay ? "block" : "none",
  };

  const showHideForm = () => setDisplay((prevState) => !prevState);

  const handlerDeleteList = (id) => deleteList(id);

  const create = (e) => {
    e.preventDefault();
    const name = listName.trim();
    if (name !== "") {
      showHideForm();
      createList({ name });
    }
  };

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = null;
    setName("");
  }, [formDisplay]);

  return (
    <nav className="dashboard">
      <div className="head">
        <h1>
          <Link to="/">List</Link>
        </h1>
        <div className="add_list" onClick={showHideForm}>
          &#43;
        </div>
        <form action="submit" className="add_list_form" onSubmit={create} style={formStyle}>
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
      <Link to="today" className="todayLink" data-count={count}>
        Today
      </Link>
      <ul className="menu">
        {lists.map((list) => (
          <List key={list.id} list={list} onDelete={handlerDeleteList} />
        ))}
      </ul>
    </nav>
  );
}

export default Dashboard;

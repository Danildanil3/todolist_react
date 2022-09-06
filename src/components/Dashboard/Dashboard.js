import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./Dashboard.css";
import List from "./List/List";

function Dashboard({ onClick, onDelete, onSubmit }) {
  const baseURL = "http://localhost:3000/api";
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const [listName, setName] = useState("");
  const [formDisplay, setDisplay] = useState(false);
  const inputRef = useRef();

  const showHideForm = () => {
    setDisplay((prevState) => !prevState);
  };

  const chooseList = (id) => {
    const selectedList = document.querySelector(`.menu_item:nth-child(${id})`);
    if (selectedList == null) navigate("/");
  };

  const deleteList = (id) => {
    setLists((prevState) => prevState.filter((lst) => lst.id !== id));
    axios
      .delete(`${baseURL}/lists/${id}`)
      .then((_) => console.log(`List(${id}) was deleted`))
      .catch((err) => console.error(err));
  };

  const createList = (event) => {
    event.preventDefault();
    const name = listName.trim();
    if (name !== "") {
      showHideForm();
      axios
        .post(`${baseURL}/lists`, { name })
        .then((res) => setLists((prevState) => [...prevState, res.data]))
        .catch((err) => console.error(err));
    }
  };

  const formStyle = {
    display: formDisplay ? "block" : "none",
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/dashboard`)
      .then((response) => setLists(response.data))
      .catch((err) => console.error(err));
  }, []);

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
        <form action="submit" className="add_list_form" onSubmit={createList} style={formStyle}>
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
      <Link to="today" className="todayLink">Today</Link>
      <ul className="menu">
        {lists.map((obj) => (
          <List key={obj.id} list={obj} undone={obj.undone} onClick={chooseList} onDelete={deleteList} />
        ))}
      </ul>
    </nav>
  );
}

export default Dashboard;

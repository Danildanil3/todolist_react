import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import {getAllLists} from "../../hooks/Hook"
import { v4 as uuidv4 } from "uuid";
import "./Dashboard.css";
import List from "./List/List";

function Dashboard({ onClick, onDelete, onSubmit }) {

  const baseURL = "http://localhost:3000/api/lists";
  const [lists, setLists] = useState([]);
  const [formDisplay, setDisplay] = useState(false);
  const [listName, setName] = useState("");
  const inputRef = useRef();


  useEffect(() => {
  axios.get(baseURL)
    .then(response => setLists(response.data))
    .catch(err => console.error(err));
  }, []);



  const handlerFormShown = () => {
    setDisplay((prevState) => !prevState);
  };

  const handlerChooseList = (id) => {
    onClick(id);
  };

  const deleteList = (id) => {
    console.log(`${baseURL}/6`);
    axios.delete(`${baseURL}/${id}`)
    .then(_ => console.log(`Task(${id}) was deleted`))
    .catch(err => console.error(err));
  };

  const createList = (event) => {
    event.preventDefault();
    const name = listName.trim()
    if (name !== "") {
      handlerFormShown();
      axios.post(baseURL, {name})
      .then(res => setLists(prevState => [...prevState, res]))
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
    <nav className="dashboard">
      <div className="head">
        <h1>Lists</h1>
        <div className="add_list" onClick={handlerFormShown}>&#43;</div>
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
      <ul className="menu">
        {lists.map((obj) => (
          <List key={obj.id} list={obj} onClick={handlerChooseList} onDelete={deleteList} />
        ))}
      </ul>
    </nav>
  );
}

export default Dashboard;

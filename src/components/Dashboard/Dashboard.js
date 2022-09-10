import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectTodayCount, selectAllTasks } from "../../store/selectors";
import { deleteTaskAx } from "../../axios/axios";
import { deleteTasksAction } from "../../store/tasks/reducer";
import useLists from "../../hooks/useLists";
import List from "./List/List";
import "./Dashboard.css";

function Dashboard(props) {
  const todayCount = useSelector(selectTodayCount);
  const allTasks = useSelector(selectAllTasks);
  const { lists, createList, deleteList } = useLists();
  const [listName, setName] = useState("");
  const [formDisplay, setDisplay] = useState(false);
  const inputRef = useRef();

  const dispatch = useDispatch();

  const formStyle = {
    display: formDisplay ? "block" : "none",
  };

  const showHideForm = () => setDisplay((prevState) => !prevState);

  const handlerDeleteList = (id) => {
    allTasks[id].forEach((task) => deleteTaskAx(task.id));
    dispatch(deleteTasksAction(id));
    deleteList(id);
  };

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
      <Link to="today" className="todayLink" data-count={todayCount}>
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

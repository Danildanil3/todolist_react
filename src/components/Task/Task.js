import React, { useEffect, useState } from "react";
import "./Task.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getFormatedDate(date) {
  if (date === null || date === "") {
    return "not specified";
  } else {
    date = new Date(date);
  }
  const values = [
    (date.getDate() < 10 ? "0" : "") + date.getDate(),
    (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1),
    date.getFullYear() - 2000,
  ];
  return values.join(".");
}

function isOverdue(date) {
  if (date == null || date === "") {
    return false;
  } else {
    return new Date(date) < new Date();
  }
}

function defineClasses(done, due_date) {
  let classes = "task ";
  if (done) classes += "done ";
  if (isOverdue(due_date)) classes += "overdue ";
  return classes;
}

function Task(props) {
  let [task, setTask] = useState(props.task);
  const { onChange, onClick } = props;

  const handleDoneChange = (event) => {
    setTask((t) => ({ ...t, done: !t.done }));
    onChange(task.id);
  };

  const hadleOnDelete = (event) => {
    onClick(task.id);
  };

  return (
    <div className={defineClasses(task.done, task.due_date)}>
      <div className="data">
        <i className="calendar"></i>
        <p>{getFormatedDate(task.due_date)}</p>
      </div>
      <div className="task__content">
        <div className="task__title">
          <input type="checkbox" className="input" defaultChecked={task.done} onChange={handleDoneChange} />
          <p>{capitalizeFirstLetter(task.name)}</p>
        </div>
        <div className="task__desc">
          <p>{task.description}</p>
        </div>
        <div className="delete" onClick={hadleOnDelete}></div>
      </div>
    </div>
  );
}

export default Task;

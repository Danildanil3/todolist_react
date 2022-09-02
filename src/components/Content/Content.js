import React from "react";
import "./Content.css";
import Task from "../Task/Task";

function Content(props) {
  const tasks = props.tasks;

  const handleDoneChange = (id) => {
    props.onChange(id);
  }

  const hadleOnDelete = (id) => {
    props.onClick(id);
  }

  return (
  <div className="content">
    {tasks.map(t => <Task key={t.id} task={t} onChange={handleDoneChange} onClick={hadleOnDelete}/>)}
  </div>
  );
}

export default Content;

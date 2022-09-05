import React from "react";
import "./Content.css";
import Task from "./Task/Task";

function Content(props) {
  const tasks = props.tasks;

  const handleDoneChange = (id) => {
    props.onChange(id);
  };

  const hadleOnDelete = (id) => {
    props.onClick(id);
  };

  const handleOnEdit = (task) => {
    console.log('Content', task);
    props.onEdit(task);
  };

  return (
    <div className="content">
      {tasks.map((t) => (
        <Task key={t.id} task={t} onChange={handleDoneChange} onDelete={hadleOnDelete} onEdit={handleOnEdit} />
      ))}
    </div>
  );
}

export default Content;

import React from "react";
import "./Content.css";

function Content(props) {
  const tasks = props.tasks;

  return (
    <div className="content">
      {props.children}
    </div>
  );
}

export default Content;

      // {/* {tasks.map((t) => (
      //   <Task key={t.id} task={t} onChange={handleDoneChange} onDelete={hadleOnDelete} onEdit={handleOnEdit} />
      // ))} */}
import React, { useEffect, useState } from "react";
import "./Task.css";
import getFormatedDate from "../../../../utils/getFormatedDate";
import capitalizeFstLtr from "../../../../utils/capitalizeFstLtr";
import defineTaskClasses from "../../../../utils/defineTaskClasses";

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
    <div className={defineTaskClasses(task.done, task.due_date)}>
      <div className="data">
        <i className="calendar"></i>
        <p>{getFormatedDate(task.due_date)}</p>
      </div>
      <div className="task__content">
        <div className="task__title">
          <input type="checkbox" className="input" defaultChecked={task.done} onChange={handleDoneChange} />
          <p>{capitalizeFstLtr(task.name)}</p>
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

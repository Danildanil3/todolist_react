import React, { useRef, useState } from "react";
import "./Task.css";
import getFormatedDate from "../../utils/getFormatedDate";
import capitalizeFstLtr from "../../utils/capitalizeFstLtr";
import defineTaskClasses from "../../utils/defineTaskClasses";

function Task(props) {
  const popup = useRef();
  let [task, setTask] = useState(props.task);
  const { onChange, onDelete, onEdit } = props;

  const doneChange = (event) => {
    setTask((t) => ({ ...t, done: !t.done }));
    onChange(task.id);
  };

  const deleteTask = (event) => {
    onDelete(task.id);
  };

  const editTask = (event) => {
    console.log('Task', task);
    onEdit(task);
  };

  const hideMenu = () => {
    popup.current.classList.remove("show");
  };

  const togglePopup = () => {
    popup.current.classList.toggle("show");
    setTimeout(hideMenu, 5000);
  };

  return (
    <div className={defineTaskClasses(task.done, task.due_date)}>
      <div className="data">
        <i className="calendar"></i>
        <p>{getFormatedDate(task.due_date)}</p>
      </div>
      <div className="task__content">
        <div className="task__title">
          <input type="checkbox" className="input" defaultChecked={task.done} onChange={doneChange} />
          <p>{capitalizeFstLtr(task.name)}</p>
        </div>
        <div className="task__desc">
          <p>{task.description}</p>
        </div>
        <div className="cover" onClick={togglePopup}>
          <div className="popup">
            <span className="popupmenu" id="Popup" ref={popup}>
              <ul>
                <li className="delete" onClick={deleteTask}></li>
                <li className="edit" onClick={editTask}></li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;

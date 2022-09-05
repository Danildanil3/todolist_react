import React, { useEffect, useRef, useState } from "react";
import "./Task.css";
import getFormatedDate from "../../../../utils/getFormatedDate";
import capitalizeFstLtr from "../../../../utils/capitalizeFstLtr";
import defineTaskClasses from "../../../../utils/defineTaskClasses";

function Task(props) {
  const popup = useRef();
  let [task, setTask] = useState(props.task);
  const { onChange, onClick } = props;

  const handleDoneChange = (event) => {
    setTask((t) => ({ ...t, done: !t.done }));
    onChange(task.id);
  };

  const hadleOnDelete = (event) => {
    onClick(task.id);
  };

  const hadleOnEdit = (event) => {

  }

  const togglePopup = () => {
    popup.current.classList.toggle("show");
  }

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
        <div className="cover" onClick={togglePopup}>
          <div className="popup" >
            <span className="popupmenu" id="Popup" ref={popup}>
              <ul>
                <li className="delete" onClick={hadleOnDelete}></li>
                <li className="edit" onClick={hadleOnEdit}></li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;

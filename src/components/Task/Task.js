import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Task.css";
import getFormatedDate from "../../utils/getFormatedDate";
import capitalizeFstLtr from "../../utils/capitalizeFstLtr";
import defineTaskClasses from "../../utils/defineTaskClasses";

function Task(props) {
  const popup = useRef();
  const [task, setTask] = useState(props.task);
  const [checked, setChecked] = useState(!task.done);
  const [timer, setTimer] = useState(false);
  const { onToggle, onDelete, onEdit, today } = props;

  const deleteTask = (e) => onDelete(task);

  const editTask = (e) => onEdit(task);

  const hideMenu = () => popup.current.classList.remove("show");

  const togglePopup = () => {
    popup.current.classList.toggle("show");
    setTimer(!timer);
  };

  const doneChange = useCallback(() => {
    setChecked(!checked);
    onToggle({ id: task.id, name: task.name, description: task.description, done: checked, due_date: task.due_date });
    setTask((t) => ({ ...t, done: !t.done }));
  }, [checked]);

  useEffect(()=> {
    const timeout = setTimeout(hideMenu, 5000);
    return () => clearTimeout(timeout);
  },[timer])

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
        {today !== undefined && (
          <Link to={`/todo-list/${task.list_id}`}>
            <div className="listLink">{task.list.name}</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Task;

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeTaskAction, openTaskAction } from "../../store/dashboard/reducer";
import { setEditAction } from "../../store/edit/reducer";
import { Capitalize, getFormatedDate, defineTaskClasses } from "../../utils";
import "./Task.css";

function Task({ onToggle, onDelete, today, obj }) {
  const popup = useRef();
  const [task, setTask] = useState(obj);
  const [checked, setChecked] = useState(!task.done);
  const [timer, setTimer] = useState(false);

  const dispatch = useDispatch();

  const hideMenu = () => popup.current.classList.remove("show");

  const togglePopup = () => {
    popup.current.classList.toggle("show");
    setTimer(!timer);
  };

  const deleteTask = (e) => {
    if (!task.done) dispatch(closeTaskAction(task.list_id));
    onDelete(task);
  };

  const editTask = (e) => {
    dispatch(setEditAction(task));
  };

  const doneChange = useCallback(() => {
    setChecked(!checked);
    onToggle({ ...task, done: checked });
    setTask((t) => ({ ...t, done: !t.done }));
    if (task.done !== true) {
      dispatch(closeTaskAction(task.list_id));
    } else {
      dispatch(openTaskAction(task.list_id));
    }
  }, [checked]);

  useEffect(() => {
    const timeout = setTimeout(hideMenu, 5000);
    return () => clearTimeout(timeout);
  }, [timer]);

  return (
    <div className={defineTaskClasses(task.done, task.due_date)} data-id={task.id}>
      <div className="data">
        <i className="calendar"></i>
        <p>{getFormatedDate(task.due_date)}</p>
      </div>
      <div className="task__content">
        <div className="task__title">
          <input type="checkbox" className="input" defaultChecked={task.done} onChange={doneChange} />
          <p>{Capitalize(task.name)}</p>
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
          <Link to={`/todo-list/${task.list.id}?selected=${task.id}`}>
            <div className="listLink">{task.list.name}</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Task;

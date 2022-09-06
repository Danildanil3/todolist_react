import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import AddBtn from "../ui/AddBtn/Add";

function Form({ list_id, taskOnEdit, onSubmit }) {
  const form = useRef();
  const notif = useRef();
  const nameInp = useRef();
  const descInp = useRef();
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [due_date, setDate] = useState("");
  const [done, setDone] = useState(false);
  const [id, setId] = useState(null);

  const handlerToggleForm = (e) => {
    if (form.current.classList.contains("visible")) {
      hideForm();
    } else {
      showForm();
    }
  };

  const hideForm = () => {
    form.current.classList.remove("animate");
    setTimeout(() => {
      form.current.classList.remove("visible");
    }, 1200);
  };

  const showForm = () => {
    form.current.classList.add("visible");
    setTimeout(() => {
      form.current.classList.add("animate");
    }, 50);
  };

  const nameHandler = (event) => {
    event.stopPropagation();
    setName(event.target.value);
  };

  const descHandler = (event) => {
    event.stopPropagation();
    setDesc(event.target.value);
  };

  const dateHandler = (event) => {
    event.stopPropagation();
    setDate(event.target.value);
  };

  const doneHandler = (event) => {
    event.stopPropagation();
    setDone((prevState) => !prevState);
  };

  const hideNotification = () => {
    notif.current.classList.remove("error");
    notif.current.classList.remove("close");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      nameInp.current.classList.add("regected");
      setTimeout(() => {
        nameInp.current.classList.remove("regected");
      }, 2000);
    } else if (list_id === null) {
      notif.current.classList.add("error");
      setTimeout(hideNotification, 3000);
    } else {
      onSubmit({ name, description, due_date, list_id, done, id});
      nameInp.current.value = null;
      descInp.current.value = null;
      setDesc("");
      setName("");
    }
    hideForm();
  };

  useEffect(() => {
    if (taskOnEdit) {
      setName(taskOnEdit.name);
      setDesc(taskOnEdit.description);
      setDone(taskOnEdit.done);
      setDate(taskOnEdit.due_date);
      setId(taskOnEdit.id)
      showForm();
    }
      console.log('Form',taskOnEdit);
    
  }, [taskOnEdit]);

  return (
    <>
      <form name="task" className="form" ref={form} onSubmit={submitHandler}>
        <div className="form__control" id="form__name">
          <input
            type="text"
            id="name"
            className="form__input"
            name="name"
            autoComplete="off"
            placeholder=" "
            value={name}
            onChange={nameHandler}
            ref={nameInp}
          />
          <label htmlFor="form__name" className="form__label">
            Name
          </label>
        </div>

        <div className="form__control" id="form__desc">
          <input
            type="text"
            id="desc"
            className="form__input"
            name="description"
            autoComplete="off"
            placeholder=" "
            value={description}
            onChange={descHandler}
            ref={descInp}
          ></input>
          <label htmlFor="form__desc" className="form__label">
            Desctiption
          </label>
        </div>

        <div className="form__control" id="form__date">
          <input type="date" name="due_date" id="date" value={due_date} onChange={dateHandler} />
          <div className="form__checkbox">
            <input type="checkbox" name="done" id="form__checkbox" value={done} onChange={doneHandler} />
            <label htmlFor="form__checkbox">Done</label>
          </div>
        </div>

        <div className="form__btn">
          <button type="submit">CREATE</button>
        </div>
      </form>

      <AddBtn onClick={handlerToggleForm} />

      <div id="notification" ref={notif}>
        <div className="notification__body">
          <div className="notification-text">Choose list !</div>
        </div>
      </div>
    </>
  );
}

export default Form;

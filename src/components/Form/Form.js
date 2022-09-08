import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import AddBtn from "../ui/AddBtn/Add";

function Form({ list_id, taskOnEdit, onSubmit }) {
  const form = useRef();
  const nameInp = useRef();
  const descInp = useRef();
  
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [due_date, setDate] = useState("");
  const [done, setDone] = useState(false);
  const [listid, setList] = useState(null);
  const [id, setId] = useState(null);

  const lists = useSelector((state) => state.dashboard.lists);

  const handlerToggleForm = (e) => form.current.classList.toggle("animate");
  const hideForm = () => form.current.classList.remove("animate");
  const showForm = () => form.current.classList.add("animate");

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

  const onSelectList = (event) => {
    console.log(event.target.value);
  }

  // const hideNotification = () => {
  //   notif.current.classList.remove("error");
  //   notif.current.classList.remove("close");
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(list_id);
    if (name.trim() === "") {
      nameInp.current.classList.add("regected");
      setTimeout(() => {
        nameInp.current.classList.remove("regected");
      }, 2000);
    } else if (list_id === null) {
      // notif.current.classList.add("error");
      // setTimeout(hideNotification, 3000);
    } else {
      // onSubmit({ name, description, due_date, list_id, done, id });
      nameInp.current.value = null;
      descInp.current.value = null;
      setDesc("");
      setName("");
      hideForm();
    }
  };

  useEffect(() => {
    if (taskOnEdit) {
      setName(taskOnEdit.name);
      setDesc(taskOnEdit.description);
      setDone(taskOnEdit.done);
      setDate(taskOnEdit.due_date);
      setId(taskOnEdit.id);
      showForm();
    }
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
          <select name="list_id" className="selectList" onChange={onSelectList} value={1}>
          <option value={1} disabled>Choose list</option>
            {lists.map((list) => (
              <option key={list.id} value={list.id}>{list.name}</option>
            ))}
          </select>
        </div>

        <div className="form__btn">
          <button type="submit">CREATE</button>
        </div>
      </form>

      <AddBtn onClick={handlerToggleForm} />
    </>
  );
}

export default Form;

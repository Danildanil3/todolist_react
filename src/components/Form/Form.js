import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllLists } from "../../store/selectors";
import useTasks from "../../hooks/useTasks";
import "./Form.css";
import AddBtn from "../ui/AddBtn/Add";

function Form({ taskOnEdit }) {
  const form = useRef();
  const nameInp = useRef();
  const selectInp = useRef();

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [due_date, setDate] = useState("");
  const [done, setDone] = useState(false);
  const [list_id, setList] = useState(0);
  const [id, setId] = useState(null);

  const lists = useSelector(selectAllLists);
  // const dispatch = useDispatch();

  const handlerToggleForm = (e) => form.current.classList.toggle("animate");
  const hideForm = () => form.current.classList.remove("animate");
  const showForm = () => form.current.classList.add("animate");
  const hideNameStroke = () => nameInp.current.classList.remove("rejected");
  const hideSelectStroke = () => selectInp.current.classList.remove("rejected");


  const { createTask } = useTasks(id);

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

  const onSelectList = (event) => {
    setList(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      nameInp.current.classList.add("rejected");
      setTimeout(hideNameStroke, 2000);
    } else if (list_id === 0) {
      selectInp.current.classList.add("rejected");
      setTimeout(hideSelectStroke, 2000);
    } else {
      if (due_date === "") {
        createTask({ name, description, due_date: null, list_id: Number(list_id), done });
      } else {
        createTask({ name, description, due_date, list_id: Number(list_id), done });
      }
      setList(0);
      setDate("");
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
          ></input>
          <label htmlFor="form__desc" className="form__label">
            Desctiption
          </label>
        </div>

        <div className="form__control" id="form__date">
          <input type="date" name="due_date" id="date" value={due_date} onChange={dateHandler} />
          <select name="list_id" className="selectList" onChange={onSelectList} value={list_id} ref={selectInp}>
            <option value={0} disabled>
              Choose list
            </option>
            {lists.map((list) => (
              <option key={list.id} value={list.id}>
                {list.name}
              </option>
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

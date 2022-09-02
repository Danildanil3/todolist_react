import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <form name="task" className="form">
      <div className="form__control" id="form__name">
        <input type="text" id="name" className="form__input" name="name" autoComplete="off" placeholder=" " />
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
        ></input>
        <label htmlFor="form__desc" className="form__label">
          Desctiption
        </label>
      </div>

      <div className="form__control" id="form__date">
        <input type="date" name="due_date" id="date" />
        <div className="form__checkbox">
          <input type="checkbox" name="done" value="true" id="form__checkbox" />
          <label htmlFor="form__checkbox">Done</label>
        </div>
      </div>

      <div className="form__btn">
        <button type="submit">CREATE</button>
      </div>
    </form>
  );
}

export default Form;

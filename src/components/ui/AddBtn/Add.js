import React, { useRef } from "react";
import "./Add.css";

function AddBtn({ onClick }) {
  const btn = useRef();

  const handlerToggleForm = (event) => {
    btn.current.classList.toggle("animate");
    onClick(event);
  };
  return <div ref={btn} className="add_task_btn" onClick={handlerToggleForm}></div>;
}

export default AddBtn;

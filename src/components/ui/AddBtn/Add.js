import "./Add.css";

function AddBtn({ onClick }) {
  const handlerToggleForm = (event) => onClick(event);

  return <div className="add_task_btn" onClick={handlerToggleForm}></div>;
}

export default AddBtn;

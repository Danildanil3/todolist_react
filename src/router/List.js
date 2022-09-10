import React, { useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import Task from "../components/Task/Task";
import uncle from "../assets/uncle.png";
import useTasks from "../hooks/useTasks";

function List() {
  let { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTaskId = searchParams.get("selected");
  const navigate = useNavigate();

  id = parseInt(id);
  if (isNaN(id)) navigate("*");

  if (selectedTaskId !== null) {
    const selectedTask = document.querySelector(`[data-id="${selectedTaskId}"]`);
    if (selectedTask) selectedTask.classList.add("selected");
  }

  const { tasks, getTasks, updateTask, deleteTask } = useTasks(id);

  const styles = {
    div: {
      textAlign: "center",
      position: "absolute",
      left: "50%",
      top: "40%",
      transform: "translate(-50%, -50%)",
    },
    img: {
      height: "350px",
      window: "350px",
    },
    text: {
      marginTop: "50px",
      color: "#696969",
    },
  };

  const onTaskToggle = (task) => {
    updateTask(task);
  };

  const onDeleteTask = (task) => {
    deleteTask(task);
  };

  useEffect(() => {
    getTasks();
  }, [id]);

  return (
    <>
      {tasks?.length !== 0 ? (
        tasks?.map((t) => <Task key={t.id} task={t} onToggle={onTaskToggle} onDelete={onDeleteTask} />)
      ) : (
        <div className="emptyList" style={styles.div}>
          <img alt="Empty list" src={uncle} style={styles.img} />
          <h1 style={styles.text}>Create tasks ! Make yourself useful</h1>
        </div>
      )}
    </>
  );
}
export default List;

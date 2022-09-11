import React, { useEffect } from "react";
import Task from "../components/Task/Task";
import useTasks from "../hooks/useTasks";
import empty from "../assets/empty.svg";

function Today() {
  const { todayTasks, updateTask, deleteTask, getCollection } = useTasks();

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

  useEffect(() => {
    getCollection();
  }, []);

  const onTaskToggle = (task) => updateTask(task);
  const onDeleteTask = (task) => deleteTask(task);

  return (
    <>
      {todayTasks?.map((t) => (
        <Task key={t.id} obj={t} onToggle={onTaskToggle} onDelete={onDeleteTask} today />
      ))}

      {todayTasks?.length === 0 && (
        <div style={styles.div}>
          <img alt="No tasks" src={empty} style={styles.img} />
          <h1 style={styles.text}>No tasks for today</h1>
        </div>
      )}
    </>
  );
}
export default Today;

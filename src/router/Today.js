import React, { useEffect } from "react";
import Content from "../components/Content/Content";
import Task from "../components/Task/Task";
import useTasks from "../hooks/useTasks";
import empty from "../assets/empty.svg";

function Today() {
  const baseURL = "http://localhost:3000/api/collection/today";
  const { tasks, getTasks, updateTask, deleteTask } = useTasks(baseURL);

  const styles = {
    div: {
      position: "relative",
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
    getTasks(baseURL);
  }, []);

  const onTaskToggle = (task) => {
    updateTask(task);
  };

  const onDeleteTask = (id) => {
    deleteTask(id);
  };

  return (
    <Content>
      {tasks?.map((t) => (
        <Task key={t.id} task={t} onToggle={onTaskToggle} onDelete={onDeleteTask} today />
      ))}

      {tasks.length == 0 && (
        <div style={styles.div}>
          <img alt="No tasks" src={empty} style={styles.img} />
          <h1 style={styles.text}>No tasks for today</h1>
        </div>
      )}
    </Content>
  );
}
export default Today;

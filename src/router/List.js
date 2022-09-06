import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Content from "../components/Content/Content";
import Task from "../components/Task/Task";
import uncle from "../assets/uncle.png";
import useTasks from "../hooks/useTasks";

function List() {
  const { id } = useParams();
  const baseURL = "http://localhost:3000/api/lists";
  const { tasks, getTasks, createTask, updateTask, deleteTask } = useTasks(`${baseURL}/${id}?all=true`);

  const styles = {
    div: {
      position: "relative",
      "text-align": "center",
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
      "margin-top": "50px",
      color: "#696969",
    },
  };

  useEffect(() => {
    getTasks(`${baseURL}/${id}?all=true`);
  }, [id]);

  return (
    <Content>
      {tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
      {tasks.length == 0 && (
        <div className="emptyList" style={styles.div}>
          <img alt="Empty list" src={uncle} style={styles.img} />
          <h1 style={styles.text}>Hurry up ! Сreate a task for yourself</h1>
        </div>
      )}
    </Content>
  );
}
export default List;

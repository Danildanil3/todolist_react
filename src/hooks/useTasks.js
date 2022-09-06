import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { getTasksAx, createTaskAx, deleteTaskAx, updateTaskAx } from "../axios/axios";

function useTasks(endPoint) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const getTasks = async (ep) => {
    const res = await getTasksAx(ep);
    setTasks(res);
  };

  const deleteTask = async (id) => {
    await deleteTaskAx(id);
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const createTask = async () => {
    const res = await createTaskAx();
    setTasks((prevState) => [...prevState, res]);
  };

  const updateTask = async (id) => {
    const res = await updateTaskAx(id);
    setTasks((prevState) => {
      prevState.map((obj) => {
        if (obj.id === id) obj = res;
        return obj;
      });
    });
  };

  return { tasks, getTasks, createTask, updateTask, deleteTask };
}

export default useTasks;

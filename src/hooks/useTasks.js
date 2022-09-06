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

  const updateTask = async (task) => {
    await updateTaskAx(task.id, task);
    const newTasks = tasks.map((obj) => obj.id === task.id ? { ...obj, ...task } : obj);
    setTasks(newTasks);
  };

  return { tasks, getTasks, createTask, updateTask, deleteTask };
}

export default useTasks;

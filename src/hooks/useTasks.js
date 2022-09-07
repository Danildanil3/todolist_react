import axios from "axios";
import { useEffect, useState } from "react";
import { getTasksAx, createTaskAx, deleteTaskAx, updateTaskAx } from "../axios/axios";

function useTasks(endPoint) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async (ep) => {
    const res = await getTasksAx(ep);
    setTasks(res);
  };

  const deleteTask = async (id) => {
    await deleteTaskAx(id);
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const createTask = async (task) => {
    const res = await createTaskAx(task);
    setTasks((prevState) => [...prevState, res.data]);
  };

  const updateTask = async (task) => {
    await updateTaskAx(task.id, task);
    const newTasks = tasks.map((obj) => (obj.id === task.id ? { ...obj, ...task } : obj));
    setTasks(newTasks);
  };

  useEffect(() => {
    getTasksAx(endPoint).then((res) => setTasks(res));
  }, []);

  return { tasks, getTasks, createTask, updateTask, deleteTask };
}

export default useTasks;

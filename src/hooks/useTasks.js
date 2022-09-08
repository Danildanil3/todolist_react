import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksAx, createTaskAx, deleteTaskAx, updateTaskAx } from "../axios/axios";
import { loadTasksAction } from "../store/tasks/reducer";

function useTasks(id) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks[id] || []);

  const getTasks = () => {
    dispatch(loadTasksAction(id));
  };

  const deleteTask = async (id) => {
    // await deleteTaskAx(id);
    // setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const createTask = async (task) => {
    // const res = await createTaskAx(task);
    // setTasks((prevState) => [...prevState, res.data]);
  };

  const updateTask = async (task) => {
    // await updateTaskAx(task.id, task);
    // const newTasks = tasks.map((obj) => (obj.id === task.id ? { ...obj, ...task } : obj));
    // setTasks(newTasks);
  };

  return { tasks, getTasks, createTask, updateTask, deleteTask };
}

export default useTasks;

import axios from "axios";

const baseTURL = "http://localhost:3000/api/tasks";
const baseLURL = "http://localhost:3000/api/lists";

const getTasksAx = async (endPoint) => {
  return await axios
    .get(endPoint)
    .then((res) => res.data)
    .catch((err) => console.error("Axios get tasks:", err));
};

const createTaskAx = async (task) => {
  return await axios
    .post(baseTURL, task)
    .then((res) => res.data)
    .catch((err) => console.error("Axios create task:", err));
};

const updateTaskAx = async (id, body) => {
  await axios
    .patch(`${baseTURL}/${id}`, body)
    .then((res) => res.data)
    .catch((err) => console.error("Axios update task:", err));
};

const deleteTaskAx = async (id) => {
  await axios
    .delete(`${baseTURL}/${id}`)
    .then((_) => console.log("Task was deleted"))
    .catch((err) => console.error("Axios delete task:", err));
};

const getDashboardAx = async () => {
  return await axios
    .get("http://localhost:3000/api/dashboard")
    .then((res) => res.data)
    .catch((err) => console.error("Axios get dashboard:", err));
};

const getListAx = async (ep) => {
  return await axios
    .get(ep)
    .then((res) => res.data)
    .catch((err) => console.error("Axios get list:", err));
};

const createListAx = async (list) => {
  return await axios
    .post(baseLURL, list)
    .then((res) => res.data)
    .catch((err) => console.error("Axios create list:", err));
};

const deleteListAx = async (id) => {
  await axios
    .delete(`${baseLURL}/${id}`)
    .then((_) => console.log("List was deleted"))
    .catch((err) => console.error("Axios delete list:", err));
};

export { getTasksAx, createTaskAx, deleteTaskAx, updateTaskAx, getDashboardAx, getListAx, createListAx, deleteListAx };

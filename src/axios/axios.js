import axios from "axios";
const baseTURL = "http://localhost:3000/api/tasks";
const baseLURL = "http://localhost:3000/api/lists";


const getTasksAx = async (endPoint) => {
  return await axios
    .get(endPoint)
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

const createTaskAx = async (task) => {
  return await axios
    .post(baseTURL, task)
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

const deleteTaskAx = async (id) => {
  await axios
    .delete(`${baseTURL}/${id}`)
    .then((_) => console.log('Task was deleted'))
    .catch((err) => console.error("Axios:", err));
};

const updateTaskAx = async (id, body) => {
   await axios
    .patch(`${baseTURL}/${id}`, body)
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

const getListsAx = async () => {
  return await axios
    .get("http://localhost:3000/api/dashboard")
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

const createListAx = async (list) => {
  return await axios
    .post(baseLURL, list)
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

const deleteListAx = async (id) => {
  await axios
    .delete(`${baseLURL}/${id}`)
    .then((_) => console.log('List was deleted'))
    .catch((err) => console.error("Axios:", err));
};

export { getTasksAx, createTaskAx, deleteTaskAx, updateTaskAx, getListsAx, createListAx, deleteListAx };

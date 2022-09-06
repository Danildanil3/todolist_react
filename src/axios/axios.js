import axios from "axios";
const baseURL = "http://localhost:3000/api/tasks";

const getTasksAx = async (endPoint) => {
  return await axios
    .get(endPoint)
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

const createTaskAx = async () => {
  return await axios
    .post(baseURL)
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

const deleteTaskAx = async (id) => {
  await axios
    .delete(`${baseURL}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

const updateTaskAx = async (id, body) => {
   await axios
    .patch(`${baseURL}/${id}`, body)
    .then((res) => res.data)
    .catch((err) => console.error("Axios:", err));
};

export { getTasksAx, createTaskAx, deleteTaskAx, updateTaskAx };

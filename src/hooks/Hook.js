import axios from "axios";

const baseURL = "http://localhost:3000/api/lists";

const getAllLists = async () => {
     await axios.get(baseURL)
    .then(response => response.data)
    .catch(err => console.error(err));
}  

export { getAllLists };
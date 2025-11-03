import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.MODE === "development"? "http://localhost:3000/api":"https://simple-store-emad.onrender.com/api",
});

export default api;
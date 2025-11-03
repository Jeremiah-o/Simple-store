import axios from 'axios'

const api = axios.create({
  baseURL:"https://simple-store-emad.onrender.com/",
});

export default api;
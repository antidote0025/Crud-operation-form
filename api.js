import axios from "axios";

export const api = axios.create({
  baseURL: "https://crud-backend-1i1q.onrender.com/api"
});

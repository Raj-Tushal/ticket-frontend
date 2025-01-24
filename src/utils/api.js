import axios from "axios";

const API = axios.create({
  baseURL: "ticket-backend-production-f63a.up.railway.app", 
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // Get token from localStorage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

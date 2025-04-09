// authService.js
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
// const API = axios.create({ baseURL: "http://localhost:5000" });

export const register = (data) => API.post("/register", data);
export const login = (data) => API.post("/login", data);

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => localStorage.getItem("token");

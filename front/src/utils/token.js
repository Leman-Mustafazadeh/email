import axios from "axios";

export const setToken = (token) => {
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = "Bearer" + token;
};

export const getToken = () => localStorage.getItem("token");

export const removeToken = () => {
  localStorage.removeItem("token");
  axios.defaults.headers.common["Authorization"] = "";
};

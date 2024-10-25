import axios from "axios";
const token = JSON.parse(localStorage.getItem("user"))?.token;
export const instance = axios.create({
  baseURL: "https://signature.redmark.az/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

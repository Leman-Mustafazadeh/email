import axios from "axios";

export const instance = axios.create({
  baseURL: "https://signature.redmark.az/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

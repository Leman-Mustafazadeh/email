import axios from "axios";
import { BASE_URL } from "./authConstants.js";
import { AUTH_KEY } from "./authConstants";

// ============================================================================

export const authApi = {
  async register(payload) {
    const { data } = await axios.post(BASE_URL + AUTH_KEY.register, payload);
    return data;
  },
  async login(payload) {
    const { data } = await axios.post(BASE_URL + AUTH_KEY.login, payload);
    return data;
  },
};

// ============================================================================


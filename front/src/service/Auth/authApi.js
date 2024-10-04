
import axios from "axios";
import create from "zustand";
import { BASE_URL, AUTH_KEY } from "./authConstants";

const authApi = create((set) => ({
  isLoading: false,
  error: null,
  
  register: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(BASE_URL + AUTH_KEY.register, payload);
      return data; 
    } catch (error) {
      set({ error: error.message });
      throw error; 
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(BASE_URL + AUTH_KEY.login, payload);
      return data; 
    } catch (error) {
      set({ error: error.message });
      throw error; 
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default authApi;

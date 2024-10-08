import { create } from "zustand";
const useAuthConstantsStore = create(() => ({
  BASE_URL: "https://signature.redmark.az",
  AUTH_KEY: {
    register: "/Account/Register",
    login: "/Account/Login",
  },
  CACHE_KEY: {
    userInfo: "userInfo",
  },
}));

export default useAuthConstantsStore;

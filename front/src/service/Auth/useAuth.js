import { create } from "zustand";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import authApi from "./authApi";
import "react-toastify/dist/ReactToastify.css"; 


const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) => {
    set({ user, isAuthenticated: true });
  },

  logout: (navigate) => {
    set({ user: null, isAuthenticated: false });
    toast.info("Logged out successfully", { autoClose: 1000 });
    navigate("/login");
  },
}));

export const useLoginMutation = (navigate) => {
  return useMutation({
    mutationFn: (payload) => authApi.login(payload),
    onSuccess: (response) => {
      const { setUser } = useAuthStore.getState();
      setUser(response.user);
      toast.success(response.message, { autoClose: 1000 });
      navigate("/contact-us");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during login.", {
        autoClose: 2000,
      });
    },
  });
};

export const useRegisterMutation = (navigate) => {
  return useMutation({
    mutationFn: (payload) => authApi.register(payload),
    onSuccess: (response) => {
      toast.success("Registration successful", { autoClose: 1500 });
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during registration.", {
        autoClose: 2000,
      });
    },
  });
};

export default useAuthStore;

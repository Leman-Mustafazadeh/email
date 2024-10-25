import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/user";
import { logoutService } from "./logoutService";
import toast from "react-hot-toast";

export const useLogoutService = () => {
  const navigate = useNavigate();
  const { token, logout } = useUserStore();

  return useMutation({
    mutationFn: () => logoutService(token),
    onSuccess: () => {
      logout();
      navigate("/login");
      toast.success(
        "You have logged out successfully. Please log in to continue."
      );
    },
    onError: (error) => {
      console.log(token);

      toast.error("Logout failed. Please try again.");
      console.error(
        "Logout error details:",
        error.response?.data || error.message
      );
    },
  });
};

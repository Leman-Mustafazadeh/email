import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "./resetPassword";
import toast from "react-hot-toast";

export const useResetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload) => resetPassword(payload),
    onSuccess: (response) => {
      console.log('Reset password success:', response);
      toast.success("Password reset successfully");
      navigate("/login");
    },
    onError: (error) => {
      console.error('Reset password error:', error);
      let errorMessage = "Failed to reset password. Please try again.";
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = "Invalid request. Please check your input and try again.";
        } else if (error.response.status === 401) {
          errorMessage = "Unauthorized. Your reset token may have expired.";
        }
        console.error('Error response:', error.response.data);
      }
      toast.error(errorMessage);
    },
  });
};
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "./forgetPassword";
import toast from "react-hot-toast";

export const useForgetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload) => forgetPassword(payload),
    onSuccess: (response) => {
      console.log(response);
      toast.success("Password reset link sent to your email");
      navigate("/reset-password-message");
    },
    onError: (err) => {
      toast.error("Failed to sent reset link. Please try again");
      console.error(err);
    },
  });
};

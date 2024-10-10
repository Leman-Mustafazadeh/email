import { useMutation } from "@tanstack/react-query";
import { loginService } from "./loginService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useUserStore } from "../../../store/user";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useUserStore();

  return useMutation({
    mutationFn: (payload) => loginService(payload),
    onSuccess: (responce) => {
      console.log(responce);
      const { user, token } = responce;
      login(user, token);
      navigate("/dashboard");
      toast.success("User Loged in");
    },
    onError: (err) => {
      toast.error("Login failed. Please try again.");
      console.error(err);
    },
  });
};

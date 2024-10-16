import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerService } from "./registerService";
import toast from "react-hot-toast";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (payload) => registerService(payload),
    onSuccess: (responce) => {
      console.log(responce);
      navigate("/login");
      toast.success("Registration succesfull");
    },
    onError: (err) => {
      toast.error("Registration failed. Please try again.");
      console.error(err);
    },
  });
};

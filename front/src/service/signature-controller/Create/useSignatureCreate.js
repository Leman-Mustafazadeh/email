import { useMutation } from "@tanstack/react-query";
import { signatureCreate } from "./signatureCreate";
import toast from "react-hot-toast";

export const useSignatureCreate = () => {
  return useMutation({
    mutationFn: (payload) => signatureCreate(payload),
    onSuccess: (responce) => {
      console.log(responce);
      toast.success(`${responce.message}. \n Please sign up`);
    },
    onError: (err) => {
      toast.error("Something going wrong");
      console.error(err);
    },
  });
};

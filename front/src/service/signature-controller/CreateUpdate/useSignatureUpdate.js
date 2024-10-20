import { useMutation } from "@tanstack/react-query";
import { signatureUpdate } from "./signatureUpdate";
import { toast } from "react-hot-toast";
export const useSignatureUpdate = () => {
  return useMutation({
    mutationFn: (payload) => signatureUpdate(payload),
    onSuccess: (responce) => {
      console.log("Update succesfull:", responce);
      toast.success("Signature updated successfully");
    },
    onError: (err) => {
      console.error("Error updating signature: ", err);
      toast.error("Something went wrong in useSignatureUpdate");
    },
  });
};

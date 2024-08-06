import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import authApi from "./authApi";

const useAuth = () =>
  useMemo(
    () => ({
      useRegister: () => {
        return useMutation({
          mutationFn: (payload) => authApi.register(payload),
          onSuccess: (response) => {
            console.log(response.access_token);
          },
          onError: () => console.error(),
        });
      },

      useLogin: () => {
        return useMutation({
          mutationFn: (payload) => authApi.login(payload),

          onSuccess: (response) => {
            console.log(response.access_token);
          },
          onError: () => console.error("error"),
        });
      },
    }),
    []
  );

export default useAuth;

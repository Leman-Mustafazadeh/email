import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { authApi } from "./authApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { removeToken, setToken } from "../../utils/token";

const useAuth = () =>
  useMemo(
    () => ({
      useRegister: () => {
        const navigate = useNavigate();
        return useMutation({
          mutationFn: (payload) => authApi.register(payload),
          onSuccess: (response) => {
            setToken(response.token);
            Swal.fire({
              icon: "success",
              title: "Registration successful",
              text: "You have successfully registered.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/login");
          },
          onError: (error) => {
            removeToken();
            Swal.fire({
              icon: "error",
              title: "Registration failed",
              text: error.message || "An error occurred during registration.",
            });
          },
        });
      },

      useLogin: () => {
        const navigate = useNavigate();
        return useMutation({
          mutationFn: (payload) => authApi.login(payload),

          onSuccess: (response) => {
            setToken(response.token);
            Swal.fire({
              icon: "success",
              title: response.message,
              showConfirmButton: false,
              timer: 1000,
            });
            navigate("/contactus");
          },
          onError: (error) => {
            Swal.fire({
              icon: "error",
              title: "Login failed",
              text: error.message || "An error occurred during login.",
            });
          },
        });
      },
    }),
    []
  );

export default useAuth;

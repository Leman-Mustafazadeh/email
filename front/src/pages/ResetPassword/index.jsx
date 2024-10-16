import { Button } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { useResetPassword } from "../../service/Auth/reset-password/useResetPassword";
import "./_style.scss";

const ResetPassword = () => {
  const resetMutation = useResetPassword();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    const userId = searchParams.get("userId");

    if (token && userId) {
      const clearToken = encodeURIComponent(token)
        .replace(/%20/g, "+")
        .replace(/%2F/g, "/");
      setValue("token", clearToken);
      setValue("email", userId);
    }
  }, [location, setValue]);

  const onSubmit = async (data) => {
    const requestBody = {
      token: data.token,
      email: data.email,
      newPassword: data.newPassword,
    };

    console.log("Form data submitted:", requestBody);

    resetMutation.mutate(requestBody);
  };

  return (
    <section className="r_pass">
      <div className="container">
        <div className="row flex-column flex-align-center flex-justify-center">
          <PageHeader header="Email Signature Generator" />
          <div className="flex-align-center flex-justify-center row flex-column bg-natural forgot mt-8">
            <h2 className="text-text font-size-24 font-weight-700 py-3">
              Reset your password
            </h2>
            <p className="font-size-18 font-weight-500 text-text pb-6">
              Enter your new password below.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row flex-column reset_title"
            >
              <h3 className="font-size-18 font-weight-500 text-text">
                New Password
              </h3>
              <input
                type="password"
                placeholder="Enter your new password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.newPassword && (
                <span className="error-message">
                  {errors.newPassword.message}
                </span>
              )}

              <h3 className="font-size-18 font-weight-500 text-text">
                Confirm New Password
              </h3>
              <input
                type="password"
                placeholder="Confirm your new password"
                {...register("confirmPassword", {
                  required: "Please confirm your new password",
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="error-message">
                  {errors.confirmPassword.message}
                </span>
              )}

              <Button
                variant="contained"
                type="submit"
                disabled={resetMutation.isLoading}
              >
                {resetMutation.isLoading ? "Resetting..." : "Reset Password"}
              </Button>
            </form>

            {resetMutation.isError && (
              <div className="error-message mt-3">
                <p>An error occurred. Please try again.</p>
                {resetMutation.error && (
                  <p>
                    {resetMutation.error.message || "Unknown error occurred."}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

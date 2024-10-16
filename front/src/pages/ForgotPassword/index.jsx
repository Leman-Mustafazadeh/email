import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { useForgetPassword } from "../../service/Auth/forget-password/useForgetPassword";
import "./_style.scss";
const ForgotPassword = () => {
  const forgetMutation = useForgetPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    forgetMutation.mutate(data);
  };

  return (
    <section className="f_pass">
      <div className="container">
        <div className="row flex-column flex-align-center flex-justify-center   ">
          <PageHeader header=" Email Signature Generator" />
          <div className=" flex-align-center flex-justify-center row flex-column bg-natural forgot mt-8">
            <h2 className="text-text font-size-24 font-weight-700 py-3  ">
              Forgot your password?
            </h2>
            <p className="font-size-18 font-weight-400 pb-6">
              Enter your email address and we’ll send you a link to reset your
              password.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row flex-column forgot_title"
            >
              <h3 className="font-size-18 font-weight-500 text-text">
                E-mail address
              </h3>

              <input
                type="text"
                placeholder="email@gmail.com"
                className={`font-size-16 font-weight-400 ${
                  errors.email ? "error" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
              <Button
                variant="contained"
                className="mt-7 p-3"
                type="submit"
                disabled={forgetMutation.isLoading}
              >
                {forgetMutation.isLoading ? "Submitting" : "Submit"}
              </Button>
            </form>
            {forgetMutation.isSuccess && (
              <p className="success-message mt-3">
                Password reset link sent to your email
              </p>
            )}
            <p className="pt-6 font-size-16 font-weight-400">
              Return to <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

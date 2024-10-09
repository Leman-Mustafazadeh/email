import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { useLoginMutation } from "../../service/Auth/useAuth";
import "./_style.scss";
import { IconButton, InputAdornment } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation(navigate);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log("Submitting form data:", data);
    await loginMutation.mutate(data);
  };

  return (
    <section>
      <div className="sign-up">
        <div className="sign-up-container">
          <div className="sigh-up-header">
            <img src={logo} alt="Logo" />
          </div>

          <div className="sing-up-content">
            <h4 className="font-size-24 font-weight-700 text-primary">
              Welcome back!
            </h4>

            <div className="login">
              <span className="text-text60 font-size-18 font-weight-400">
                Do not have an account? -{" "}
              </span>
              <Link to="/sign-up">Sign Up</Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="font-size-18 font-weight-500 text-text10 pb-2">
                  E-mail address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className={`${errors.email ? "error" : ""}`}
                />
                {errors.email && (
                  <div className="error-message">{errors.email.message}</div>
                )}
              </div>

              <div className="form-group">
                <label className="font-size-18 font-weight-500 text-text10 pb-2 pt-4">
                  Password
                </label>
                <div className="password-field relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="min. 6 characters"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`${errors.password ? "error" : ""}`}
                  />
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      edge="end"
                      aria-label="toggle password visibility"
                      className="password-toggle-icon"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                </div>
                {errors.password && (
                  <div className="error-message">{errors.password.message}</div>
                )}
              </div>
              <div className="row flex-align-center flex-justify-space-between">
                <label className="row font-size-12 font-weight-400 flex-align-center gap-1">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="checkbox"
                  />
                  <p className="font-size-12 font-weight-400"> Remember Me</p>
                </label>
                <Link
                  to="/forgotpassword"
                  className="forgot-password-link font-size-12 font-weight-400 text-primary"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className={`btn btn-primary text-natural ${
                  isSubmitting ? "btn-disabled" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>
            <span className="line">or</span>

            <button className="google btn-google">
              <img
                width="50"
                height="50"
                src="https://t4.ftcdn.net/jpg/03/08/54/37/360_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg"
                alt="google sign up"
              />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

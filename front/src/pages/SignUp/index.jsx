import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo/logo.png";
import { useRegisterMutation } from "../../service/Auth/useAuth";
import "./_style.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const registerMutation = useRegisterMutation(navigate);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await registerMutation.mutateAsync(data);
      toast.success("Registration successful!", { autoClose: 1000 });
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.", {
        autoClose: 2000,
      });
    }
  };

  return (
    <section className="sign-up">
      <div className="sign-up-container">
        <div className="sign-up-header">
          <img src={logo} alt="Logo" />
        </div>
        <div className="sign-up-content">
          <h4 className="font-size-24 font-weight-700 text-primary">
            Let&apos;s Get Started
          </h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label
                htmlFor="email"
                className="form-label font-size-18 font-weight-500 text-text10 pb-2"
              >
                E-mail Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
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
              <label
                htmlFor="password"
                className="form-label font-size-18 font-weight-500 text-text10 pb-2"
              >
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

            <button
              type="submit"
              className={`btn btn-primary text-natural ${
                isSubmitting ? "btn-disabled" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Sign Up"}
            </button>
          </form>

          <span className="line">or</span>

          <button className="google btn-google">
            <img
              width="50"
              height="50"
              src="https://t4.ftcdn.net/jpg/03/08/54/37/360_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg"
              alt="Google Sign Up"
            />
            Sign up with Google
          </button>

          <div className="login">
            <span>Already have an account? - </span>
            <Link to="/login">Login</Link>
          </div>

          <div className="free-trial">
            <span>Try our services free for 7 days!</span>
            <div className="privacy-policy">
              <p>
                By signing up, you agree to the
                <Link to="/terms"> Terms and Conditions</Link>
              </p>
              <p>
                and
                <Link to="/privacy"> Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

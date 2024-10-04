import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./_style.scss";
import logo from "../../assets/images/logo/logo.png";
import useAuthStore from "../../service/Auth/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const loginMutation = useAuthStore((state) => state.login(navigate));

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    onSubmit: async (values, actions) => {
      loginMutation.mutate(values); 
      actions.setSubmitting(false);
    },
  });

  return (
    <section>
      <div className="sign-up">
        <div className="sign-up-container">
          <div className="sigh-up-header">
            <img src={logo} alt="" />
          </div>

          <div className="sing-up-content">
            <h4 className="font-size-24 font-weight-700 text-primary">
              Welcome back!
            </h4>

            <div className="login">
              <span className="text-text60 font-size-18 font-weight-400">
                Do not have an account? -{" "}
              </span>
              <Link to={"/sign-up"}>Sign Up</Link>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <h2 className="font-size-18 font-weight-500 text-text10 pb-2">
                  E-mail address
                </h2>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`input-field ${
                    formik.touched.email && formik.errors.email
                      ? "input-error"
                      : ""
                  }`}
                  required
                />

                {formik.touched.email && formik.errors.email && (
                  <div className="error-message">{formik.errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <div className="password-field">
                  <h2 className="font-size-18 font-weight-500 text-text10 pb-2 pt-4">
                    Password
                  </h2>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="min.6 character"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`input-field ${
                      formik.touched.password && formik.errors.password
                        ? "input-error"
                        : ""
                    }`}
                    required
                  />
                  <div onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="error-message">{formik.errors.password}</div>
                )}
              </div>
              <div className="row flex-align-center flex-justify-space-between">
                <label className=" row font-size-12 font-weight-400 flex-align-center gap-1">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
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
                  formik.isSubmitting ? "btn-disabled" : ""
                }`}
              >
                {formik.isSubmitting ? "Login in..." : "Login"}
              </button>
            </form>
            <span className="line">or</span>

            <button className="google btn-google">
              <img
                width={"50px"}
                height={"50px"}
                src="https://t4.ftcdn.net/jpg/03/08/54/37/360_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg"
                alt="google sign up"
              />
              Sign up with Google
            </button>

            {/* <div className="free-trial">
              <span>Try our services free for 7 days!</span>
              <div className="privacy-policy">
                <p>
                  By signing up, you agree to the
                  <Link to="/"> Terms And Condition</Link>
                </p>
                <p>
                  and
                  <Link to="/"> Privacy Policy</Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

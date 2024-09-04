import { useFormik } from "formik";
import { Link } from "react-router-dom";
import useAuth from "../../service/Auth/useAuth";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./_style.scss";
import { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
const SignUp = () => {
  const { useRegister } = useAuth();
  const register = useRegister();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(values.email)) {
        errors.email = "Invalid Gmail address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values, actions) => {
      register.mutate(values, actions);
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
            <h4>Let's Get Started</h4>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label font-size-18 font-weight-500 text-text10 pb-2">E-mail Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-input ${formik.touched.email && formik.errors.email ? 'input-error' : ''}`}
                  required
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error-message">{formik.errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label font-size-18 font-weight-500 text-text10 pb-2">Password</label>
                <div className="password-field">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="min. 6 characters"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-input ${formik.touched.password && formik.errors.password ? 'input-error' : ''}`}
                    required
                  />
                  {/* <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment> */}
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="error-message">{formik.errors.password}</div>
                )}
              </div>
              <button
                type="submit"
                className={`btn btn-primary text-natural ${formik.isSubmitting ? "btn-disabled" : ""}`}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Registering..." : "Sign Up"}
              </button>
            </form>

            <span className="line">or</span>

            <button className="google btn-google">
              <img
                width="50px"
                height="50px"
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
                  <Link to="/"> Terms And Condition</Link>
                </p>
                <p>
                  and
                  <Link to="/"> Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

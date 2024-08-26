import { TextField, IconButton, InputAdornment, Checkbox, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useAuth from "../../service/Auth/useAuth";
import "./_style.scss";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const { useLogin } = useAuth();
  const loginin = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (user.id) {
      navigate("/faq");
    }
  }, [navigate, user.id]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false, // added for Remember Me checkbox
    },

    onSubmit: async (values, actions) => {
      loginin.mutate(values, actions);
    },
  });

  return (
    <section>
      <div className="sign-up">
        <div className="sign-up-container">
          <h1 className="sigh-up-header">Email Signature Generator</h1>

          <div className="sing-up-content">
            <h4>Welcome back!</h4>

            <div className="login">
              <span>Do not have an account? - </span>
              <Link to={"/sign-up"}>Sign Up</Link>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <TextField
                  id="email"
                  label="E-mail Address"
                  variant="outlined"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  required
                />
              </div>
              <div className="form-group">
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="row flex-align-center flex-justify-space-between">
                <FormControlLabel className="font-size-12 font-weight-400"
                  control={
                    <Checkbox
                      name="rememberMe"
                      color="primary"
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
                    />
                  }
                  
                  label="Remember Me"
                />
                <Link to="/forgotpassword" className="forgot-password-link font-size-12 font-weight-400 text-primary ">
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

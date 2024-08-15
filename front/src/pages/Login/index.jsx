import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiController } from "../../service/Auth/authApi";
import { login } from "../../service/slice/user";
import { apiEndpoints } from "../../service/Auth/authApi";
import "./_style.scss";

const showAlert = (icon, title) => {
  Swal.fire({
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: 1000,
  });
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.id) {
      navigate("/faq");
    }
  }, [navigate, user.id]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      try {
        const response = await apiController.post(
          apiEndpoints.post("/Account/Login"),
          values
        );

        if (response.auth) {
          actions.resetForm();
          dispatch(login(response.user));
          showAlert("success", response.message);
          console.log("SUCCESS");

          navigate("/");
        } else {
          showAlert("error", response.message);
        }
      } catch (error) {
        console.error("Error:", error);
        showAlert("error", "Oops, something went wrong!");
      }
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
              <Link to={"/signup"}>Sign Up</Link>
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
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary text-natural">
                Login
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

export default Login;

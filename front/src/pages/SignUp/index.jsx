/* eslint-disable react/no-unescaped-entities */
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import controller from "../../service/API";
import { login } from "../../service/slice/user";
import "./_style.scss";
// import useAuth from "../../service/Auth/useAuth";

const SignUp = () => {
  const dispatch = useDispatch();
  // const { useRegister } = useAuth();
  // const register = useRegister();

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
      try {
        // register.mutate(formik.values);
        const response = await controller.post("/Account/Register", values);
        if (response.auth) {
          actions.resetForm();
          dispatch(login(response.user));
          Swal.fire({
            icon: "success",
            title: "Registration successful",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration failed",
            text: response.message,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong!",
        });
      }
    },
  });

  return (
    <section>
      <div className="sign-up">
        <div className="sign-up-container">
          <h1 className="sigh-up-header">Email Signature Generator</h1>

          <div className="sing-up-content">
            <h4>Let's Get Started</h4>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <TextField
                  id="outlined-basic"
                  label="E-mail Address"
                  variant="outlined"
                  type="email"
                  name="email"
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
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
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
              <button
                type="submit"
                className={`btn btn-primary text-natural ${
                  formik.isSubmitting ? "btn-disabled" : ""
                }`}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Registering..." : "Sign Up"}
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

            <div className="login">
              <span>Already have an account? - </span>
              <Link to={"/login"}>Login</Link>
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

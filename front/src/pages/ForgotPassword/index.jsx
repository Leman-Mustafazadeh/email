
import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { Button, TextField } from "@mui/material";
import "./_style.scss";
const ForgotPassword = () => {
  return (
    <section>
      <div className="container">
        <div className="row flex-column flex-align-center flex-justify-center   ">
          <PageHeader header=" Email Signature Generator"  />
          <div className=" flex-align-center flex-justify-center row flex-column bg-natural forgot mt-8">
            <h2 className="text-text font-size-24 font-weight-700 py-3  ">
              Forgot your password?
            </h2>
            <p className="font-size-18 font-weight-400 pb-6">
              Enter your email address and we’ll send you a link to reset your
              password.
            </p>
            <div className=" row flex-column forgot_title">
              <h3 className="font-size-18 font-weight-500 text-text">E-mail address</h3>
              <TextField  className="mt-3 text-text"
                  id="email"
                  label="E-mail Address"
                  variant="outlined"
                  type="email"
                  name="email"
                />
           <Button variant="contained" className="mt-7 p-3">Submit</Button>
            </div>
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

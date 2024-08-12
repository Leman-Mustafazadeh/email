import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { Button, TextField } from "@mui/material";
const ForgotPassword = () => {
  return (
    <section>
      <div className="container">
        <div className="row flex-column flex-align-center flex-justify-center">
          <PageHeader header=" Email Signature Generator" />
          <div className=" flex-align-center flex-justify-center row flex-column">
            <h2 className="text-text font-size-24 font-weight-700 py-3  ">
              Forgot your password?
            </h2>
            <p className="font-size-18 font-weight-400 pb-6">
              Enter your email address and we’ll send you a link to reset your
              password.
            </p>
            <div className="forgot row flex-column">
              <h3 className="font-size-18 font-weight-500 text-text">E-mail address</h3>
              <TextField
                  id="email"
                  label="E-mail Address"
                  variant="outlined"
                  type="email"
                  name="email"
                />
           <Button variant="contained">Submit</Button>
            </div>
            <p>
              Return to <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

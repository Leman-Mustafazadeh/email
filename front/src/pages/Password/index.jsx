import PageHeader from "../../components/common/PageHeader";
import { Button } from "@mui/material";
import "./_style.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Passwords = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <section className="forgot_head">
      <div className="container">
        <div className="row flex-column flex-align-center flex-justify-center mt-9">
          <PageHeader header="Email Signature Generator" />
          <div className="flex-align-center flex-justify-center row flex-column bg-natural forgot mt-8">
            <h2 className="text-text font-size-24 font-weight-700 py-3">
              Create a new password!
            </h2>
            <div className="row flex-column forgot_title">
              <h3 className="font-size-18 font-weight-500 text-text">
                New password
              </h3>
              <div className="password-input-container">
                <input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Enter your new password"
                  className="font-size-16 font-weight-400"
                />
                <FontAwesomeIcon
                  icon={showPassword1 ? faEye : faEyeSlash}
                  onClick={togglePasswordVisibility1}
                  className="password-toggle-icon"
                />
              </div>
              <h3 className="font-size-18 font-weight-500 text-text pt-6">
                Confirm the password
              </h3>
              <div className="password-input-container">
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm your new password"
                  className="font-size-16 font-weight-400"
                />
                <FontAwesomeIcon
                  icon={showPassword2 ?  faEye:faEyeSlash}
                  onClick={togglePasswordVisibility2}
                  className="password-toggle-icon"
                />
              </div>
              <Button variant="contained" className="mt-7 p-3">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passwords;

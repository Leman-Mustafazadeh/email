import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Modal } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./_style.scss";
import popup from "./popup.png";

function SignUpModal({ isOpen, handleClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="sign-up-modal"
        footer={null}
        BackdropProps={{
          onClick: handleClose,
        }}
      >
        <div className="modal-content">
          <div className="modal_head">
            <button
              type="button"
              aria-label="Close"
              className="ant-modal-close"
              onClick={handleClose}
            ></button>
            <div className="row">
              <div className="col-12 col-lg-6 modal_left py-4 px-8">
                <div className="modal_left-header">
                  <h3>Your Email signature is just a click away!</h3>
                  <p>
                    Sign up in just 30 seconds to set up and begin using your
                    email signature free for 7 days.
                  </p>
                </div>

                <form className="form-group">
                  <div className="form-group-input">
                    <label className="font-size-18 text-text10 font-weight-500">
                      E-mail address
                    </label>
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      type="email"
                      name="email"
                      fullWidth
                    />
                  </div>
                  <div className="form-group-input">
                    <label className="font-size-18 text-text10 font-weight-500 ">
                      Password
                    </label>
                    <TextField
                      id="password"
                      label="Password"
                      variant="outlined"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={togglePasswordVisibility}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="sign-up-buttons">
                    <Link to="#">
                      <button
                        type="submit"
                        className="btn btn-primary text-natural"
                      >
                        Free sign up
                      </button>
                    </Link>
                    <Link to="#">
                      <button className="google btn-google">
                        <img
                          src="https://t4.ftcdn.net/jpg/03/08/54/37/360_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg"
                          alt="google sign up"
                        />
                        Continue with Google
                      </button>
                    </Link>
                  </div>
                </form>

                <div className="modal_left-footer">
                  <div className="login">
                    <span>Already have an account? - </span>
                    <Link to="/login">Login</Link>
                  </div>
                  <div className="free-trial">
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

              <div className="col-12 col-lg-6 modal_right d-none">
                <div className="modal_right_img">
                  <img src={popup} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

SignUpModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default SignUpModal;

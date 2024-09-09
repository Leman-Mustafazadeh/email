import { useForm } from "react-hook-form";
import AccountNavBar from "../components/AccountNavBar/AccountNavBar";
import { Link } from "react-router-dom";
import "./_style.scss";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { useState } from "react";

function AccountSetPassword() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      resetPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Password submited: ", data);
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setConfirmPassword(!confirmPassword);

  return (
    <div className="account-set-password container">
      <AccountNavBar />
      <div className="password-form container p-5">
        <div className="form-title">
          <h3>Change Account Password</h3>
        </div>

        <div className="form-description">
          <p>Create a new password with at least eight characters. </p>
          <p>
            For a strong password include both upper and lower case letters and
            numbers.
          </p>
        </div>

        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-12 col-md-8">
            <div className="row gap-5 ">
              <div className="col-12 flex-container flex-column relative">
                <label>New password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control mt-2"
                  {...register("password")}
                />
                <span className="eye-icon" onClick={togglePassword}>
                  {showPassword ? <LuEyeOff /> : <LuEye />}
                </span>
              </div>

              <div className="col-12 flex-container flex-column relative">
                <label>Confirm the password</label>
                <input
                  type={confirmPassword ? "text" : "password"}
                  className="form-control mt-2"
                  {...register("resetPassword")}
                />
                <span className="eye-icon" onClick={toggleConfirmPassword}>
                  {confirmPassword ? <LuEyeOff /> : <LuEye />}
                </span>
              </div>
            </div>
            <div className="row flex-justify-end">
              <Link>
                <button
                  type="submit"
                  className="btn btn-primary text-natural mt-3"
                >
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountSetPassword;

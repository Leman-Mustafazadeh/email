import { Button } from "@mui/material";
import PageHeader from "../../components/common/PageHeader";
import "./_style.scss"
const ResetPassword = () => {
  return (
    <section className="r_pass">
      <div className="container">
        <div className="row flex-column flex-align-center flex-justify-center   ">
          <PageHeader header=" Email Signature Generator" />
          <div className=" flex-align-center flex-justify-center row flex-column bg-natural forgot mt-8">
            <h2 className="text-text font-size-24 font-weight-700 py-3  ">
              We’ve sent you a password reset
            </h2>
            <p className="font-size-18 font-weight-500 text-text  pb-6">
              Please check your email inbox.
            </p>
            <p className="font-size-16 font-weight-500 ">
              You’ll receive this email within a few minutes. Be sure to check
              your spam folder, too.
            </p>
            <div className=" row flex-column forgot_title">
              <Button
                variant="contained"
                className="mt-7 p-3 font-size-18 font-weight-600"
              >
                Return to Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

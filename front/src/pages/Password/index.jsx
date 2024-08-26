import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { Button, TextField } from "@mui/material";
import "./_style.scss";
const Passwords = () => {
  return (
    <section className="forgot_head">
      <div className="container">
        <div className="row flex-column flex-align-center flex-justify-center  mt-9    ">
          <PageHeader header=" Email Signature Generator" />
          <div className=" flex-align-center flex-justify-center row flex-column bg-natural forgot mt-8">
            <h2 className="text-text font-size-24 font-weight-700 py-3  ">
              Create a new password!
            </h2>
            <div className=" row flex-column forgot_title">
              <h3 className="font-size-18 font-weight-500 text-text">
                New password
              </h3>
              <input type="password" placeholder="password" className="font-size-16 font-weight-400"/>
              <h3 className="font-size-18 font-weight-500 text-text pt-6">
                Confirm the password
              </h3>
              <input type="text" placeholder="confirm password" className="font-size-16 font-weight-400"/>
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

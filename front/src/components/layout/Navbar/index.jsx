import { Link } from "react-router-dom";
import "./_style.scss";
import logo from "../../../assets/images/logo/logo.png";

const Navbar = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header>
        <div className="container">
          <div className="row py-3 align-items-center header_logo">
            <div className="col-6 col-md-4">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" className="logo-img" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-8 flex-container flex-justify-end">
              <div className="btn-store">
                <Link to="login">
                  <button className="btn border-primary">Log in</button>
                </Link>
                <Link to="sign-up">
                  <button className="btn btn-primary text-natural">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

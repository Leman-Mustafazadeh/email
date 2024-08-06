import { Link } from "react-router-dom";
import "./_style.scss";

const Navbar = () => {
  return (
    <>
      <div className="container py-3">
        <div className="row px-5">
          <div className="col-6">
            <div className="logo">
              <Link to="/">
                <h1>logo</h1>
              </Link>
            </div>
          </div>
          <div className="col-6 flex-container flex-justify-end">
            <div className="btn-store">
              <Link to="login">
                <button className="btn border-primary">Log in</button>
              </Link>
              <Link to="sign-up">
                <button className="btn btn-primary text-natural">
                  Sing Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

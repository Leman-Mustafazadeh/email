import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo/logo.png";
import { useUserStore } from "../../../../store/user";
import PropTypes from "prop-types";
import { useFormStore } from "../../../../store/formData";

function DashboardNavBar({ activeComponent }) {
  const logout = useUserStore((state) => state.logout);

  const { setFormValues } = useFormStore();

  const handleInputChange = (e) => {
    setFormValues({ header: e.target.value });
  };

  return (
    <div className="container dashboard-nav-bar mb-6">
      {activeComponent === "signature" ? (
        <div className="delete row flex-align-center flex-justify-space-between">
          <div className="row flex-align-center delete_head">
            <div className="delete_img">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>

          <div className="flex-container">
            <Link onClick={() => logout()}>
              <button className="btn text-text30">Log Out</button>
            </Link>
            <Link>
              <button className="btn bg-primary text-natural px-5">
                Create your signature
              </button>
            </Link>
          </div>
        </div>
      ) : activeComponent === "design" ? (
        <div className="delete row flex-align-center flex-justify-space-between">
          <div className="row flex-align-center delete_head">
            <div className="delete_img">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>

          <input
            placeholder="New design"
            className="bg-background font-size-18 text-center text-inky"
            onChange={handleInputChange}
          />

          <div className="flex-container">
            <Link onClick={() => logout()}>
              <button className="btn text-text30">Log Out</button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

DashboardNavBar.propTypes = {
  activeComponent: PropTypes.string,
};

export default DashboardNavBar;

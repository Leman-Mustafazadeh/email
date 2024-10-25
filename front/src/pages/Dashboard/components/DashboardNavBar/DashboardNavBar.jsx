import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo/logo.png";
import { useLogoutService } from "../../../../service/Auth/Logout/useLogoutService";
import { useUserStore } from "../../../../store/user";

function DashboardNavBar() {
  const logout = useUserStore((state) => state.logout);

  return (
    <div className="container dashboard-nav-bar mb-6">
      <div className="delete row flex-align-center flex-justify-space-between">
        <div className="row flex-align-center delete_head">
          <div className="delete_img">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>

        <h4>New design</h4>
        <div className="flex-container">
          <Link onClick={() => logout()}>
            <button className="btn text-text30">Log Out</button>
          </Link>
          <Link>
            <button className="btn bg-primary text-natural">
              Invite members
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavBar;

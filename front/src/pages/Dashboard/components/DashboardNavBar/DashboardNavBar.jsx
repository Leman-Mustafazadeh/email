import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo/logo.png";

function DashboardNavBar() {
  return (
    <div className="container dashboard-nav-bar mb-6">
      <div className="delete row flex-align-center flex-justify-space-between">
        <div className="row flex-align-center delete_head">
          <div className="delete_img">
            <img src={logo} alt="" />
          </div>
        </div>

        <h4>New design</h4>

        <Link>
          <button className="btn bg-primary text-natural">
            Invite members
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardNavBar;

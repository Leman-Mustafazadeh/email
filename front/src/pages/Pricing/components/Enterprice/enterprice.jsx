import { Link } from "react-router-dom";

import { Icon } from "../../../../utils/icons/icons";
import "./_enterprice.scss";
import { Banner, Headphones, PushUp, Team, Template } from "../../../../utils/icons";
import Customize from "../../../../utils/icons/Customize";

function Enterprice() {
  return (
    <section className="enterprice ">
      <div className="container row enterprice-box p-10">
        <div className="col-12 col-md-6 enterprice-description">
          <h3>Enterprice</h3>
          <p>
            ”A customized solution designed for organizations that need more
            members, <br /> more templates, and additional features and
            benefits”
          </p>
          <ul>
            <li>
              <Icon icon={PushUp} color="#1A73E8"/>
            </li>
            <li>
              <Icon icon={Team} color="#1A73E8"/>
            </li>
            <li>
              <Icon icon={Template} color="#1A73E8"/>
            </li>
            <li>
              <Icon icon={Banner} color="#1A73E8"/>
            </li>
            <li>
              <Icon icon={Headphones} color="#1A73E8"/>
            </li>
            <li>
              <Icon icon={Customize} color="#1A73E8"/>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 flex-container flex-justify-end flex-align-center">
          <Link to="/">
            <button className="btn btn-primary text-natural px-10">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Enterprice;

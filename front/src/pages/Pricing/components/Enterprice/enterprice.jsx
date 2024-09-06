import { Link } from "react-router-dom";
import Icon1 from "../../../../assets/images/pricing-plan-icons/mailsignature.ai/Vector1.svg";
import Icon12 from "../../../../assets/images/pricing-plan-icons/mailsignature.ai/Vector2.svg";
import Icon3 from "../../../../assets/images/pricing-plan-icons/mailsignature.ai/Vector3.svg";
import Icon4 from "../../../../assets/images/pricing-plan-icons/mailsignature.ai/Vector4.svg";
import Icon7 from "../../../../assets/images/pricing-plan-icons/mailsignature.ai/Vector5.svg";
import Icon8 from "../../../../assets/images/pricing-plan-icons/mailsignature.ai/Vector6.svg";
import "./_enterprice.scss";

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
              <img src={Icon1} alt="" />
            </li>
            <li>
              <img src={Icon12} alt="" />
            </li>
            <li>
              <img src={Icon3} alt="" />
            </li>
            <li>
              <img src={Icon4} alt="" />
            </li>
            <li>
              <img src={Icon7} alt="" />
            </li>
            <li>
              <img src={Icon8} alt="" />
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 flex-container flex-justify-end flex-align-center">
          <Link to="/">
            <button className="btn btn-primary text-natural px-10">Contact us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Enterprice;

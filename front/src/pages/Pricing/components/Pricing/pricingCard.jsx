import icon1 from "../../../../assets/images/pricing-plan-icons/icon-1.png";
import icon2 from "../../../../assets/images/pricing-plan-icons/icon-2.png";
import icon3 from "../../../../assets/images/pricing-plan-icons/icon-3.png";
import icon4 from "../../../../assets/images/pricing-plan-icons/icon-4.png";
import icon5 from "../../../../assets/images/pricing-plan-icons/icon-5.png";
import icon6 from "../../../../assets/images/pricing-plan-icons/icon-6.png";
import icon7 from "../../../../assets/images/pricing-plan-icons/icon-7.png";
import icon8 from "../../../../assets/images/pricing-plan-icons/icon-8.png";
import icon10 from "../../../../assets/images/pricing-plan-icons/icon-10.png";
import icon11 from "../../../../assets/images/pricing-plan-icons/icon-11.png";
import icon12 from "../../../../assets/images/pricing-plan-icons/icon-12.png";
import icon13 from "../../../../assets/images/pricing-plan-icons/icon-13.png";
import icon14 from "../../../../assets/images/pricing-plan-icons/icon-14.png";
import { Link } from "react-router-dom";
import "./_pricingCard.scss";

function PricingCard() {
  return (
    <div className="pricing-card">
      <div className="container row gap-5 mb-5">
        {/* Card 1 */}
        <div className="col-12 col-md-4 pricing-card-item">
          <div className="card-plan">
            <h3>Pro</h3>
            <p>For large enterprises</p>
          </div>
          <div className="card-price mt-3">
            <h1>$1.23</h1>
            <span>user/month, billed annually</span>
          </div>
          <Link to="#">
            <button className="btn border-primary text-primary">
              Start Free Trial
            </button>
          </Link>
          <div className="card-plan-includes mt-2">
            <p>Plan includes:</p>
            <ul>
              <li>
                <img src={icon1} alt="icons" />{" "}
                <span> 50 email signature template</span>
              </li>
              <li>
                <img src={icon2} alt="icons" />{" "}
                <span> 25 Push banner template</span>
              </li>
              <li>
                <img src={icon3} alt="icons" /> <span> 5O User</span>
              </li>
              <li>
                <img src={icon4} alt="icons" />{" "}
                <span> Animated push banner</span>
              </li>
              <li>
                <img src={icon5} alt="icons" /> <span> Bulk creation</span>
              </li>
              <li>
                <img src={icon6} alt="icons" />{" "}
                <span> Banner, icons, logo, qr code</span>
              </li>
              <li>
                <img src={icon7} alt="icons" /> <span> VİP support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4 pricing-card-item popular">
          <div className="card-plan">
            <h3 className="text-inky font-weight-500">Advanced</h3>
            <p className="text-inky font-weight-500">
              For businesses and individuals
            </p>
          </div>
          <div className="card-price mt-3">
            <h1>$1.07</h1>
            <span>user/month, billed annually</span>
          </div>
          <Link to="#">
            <button className="btn btn-primary text-natural">
              Start Free Trial
            </button>
          </Link>
          <div className="card-plan-includes mt-2">
            <p>Plan includes:</p>
            <ul>
              <li className="text-inky">
                <img src={icon8} alt="icons" />{" "}
                <span> Up to 15 signature templates</span>
              </li>
              <li className="text-inky">
                <img src={icon11} alt="icons" /> <span> 25 User</span>
              </li>
              <li className="text-inky">
                <img src={icon12} alt="icons" />{" "}
                <span> 5 Push banner template</span>
              </li>
              <li className="text-inky">
                <img src={icon13} alt="icons" />{" "}
                <span> Banner, icons, logo, qr code</span>
              </li>
              <li className="text-inky">
                <img src={icon14} alt="icons" />{" "}
                <span>
                  {" "}
                  Unique signatures for different departments and teams
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4 pricing-card-item">
          <div className="card-plan">
            <h3>Basic</h3>
            <p>For personal use and mini teams</p>
          </div>
          <div className="card-price mt-3">
            <h1>$0.89</h1>
            <span>user/month, billed annually</span>
          </div>
          <Link to="#">
            <button className="btn border-primary text-primary">
              Start Free Trial
            </button>
          </Link>
          <div className="card-plan-includes mt-2">
            <p>Plan includes:</p>
            <ul>
              <li>
                <img src={icon1} alt="icons" /> <span> 1 Template</span>
              </li>
              <li>
                <img src={icon3} alt="icons" /> <span> 1O User</span>
              </li>
              <li>
                <img src={icon6} alt="icons" />{" "}
                <span> Banner, icons, logo, qr code</span>
              </li>
              <li>
                <img src={icon10} alt="icons" />
                <span>Centrally managed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="text-text30">
        *VAT is not included in the displayed prices.
      </span>
    </div>
  );
}

export default PricingCard;

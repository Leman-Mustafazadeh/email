import { Link } from "react-router-dom";
import "./_pricingCard.scss";
import {
  Banner,
  Block,
  Bulk,
  CheckList,
  Customize,
  Headphones,
  PushUp,
  Target,
  Team,
  Template,
} from "../../../../utils/icons";
import { Icon } from "../../../../utils/icons/icons";

function PricingCard() {
  return (
    <div className="pricing-card">
      <div className="container row gap-5 mb-5" style={{ flexWrap: "nowrap" }}>
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
                <Icon icon={Template} />
                <span> 50 email signature template</span>
              </li>
              <li>
                <Icon icon={Banner} />
                <span> 25 Push banner template</span>
              </li>
              <li>
                <Icon icon={Team} />
                <span> 50 User</span>
              </li>
              <li>
                <Icon icon={PushUp} />
                <span> Animated push banner</span>
              </li>
              <li>
                <Icon icon={Bulk} />
                <span> Bulk creation</span>
              </li>
              <li>
                <Icon icon={Block} />
                <span> Banner, icons, logo, qr code</span>
              </li>
              <li>
                <Icon icon={Headphones} />
                <span> VIP Support</span>
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
                <Icon icon={Customize} color="#000" />
                <span> Up to 15 signature templates</span>
              </li>
              <li className="text-inky">
                <Icon icon={Team} color="#000" />
                <span> 25 User</span>
              </li>
              <li className="text-inky">
                <Icon icon={Banner} color="#000" />
                <span> 5 Push banner template</span>
              </li>
              <li className="text-inky">
                <Icon icon={Block} color="#000" />
                <span> Banner, icons, logo, qr code</span>
              </li>
              <li className="text-inky">
                <Icon icon={CheckList} color="#000" />
                <span>
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
                <Icon icon={Template} />
                <span>1 Template</span>

              </li>
              <li>
                <Icon icon={Team} />
                <span>10 User</span>

              </li>
              <li>
                <Icon icon={Block} />
                <span> Banner, icons, logo, qr code</span>
              </li>
              <li>
                <Icon icon={Target} />
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

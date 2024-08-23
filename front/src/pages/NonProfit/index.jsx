/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import "./_style.scss";
import step1 from "../../assets/images/steps/Obj_1.png";
import step2 from "../../assets/images/steps/Obj_2.png";
import step3 from "../../assets/images/steps/Obj_3.png";

function NonProfit() {
  return (
    <div className="non-profit">
      <div className="container flex-container flex-column flex-align-center">
        <div className="non-profit-signature row py-10">
          <div className="col-6 offset-md-3 non-profit-description">
            <PageHeader header="Email Signature for Non-Profit" />
            <p>
              With our email signature generator, non-profit organizations can
              elevate their emails to a professional level, enhance engagement,
              and effectively communicate their mission and values with every
              message.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link to="/contact-us">
            <button className="btn btn-primary text-natural">Learn more</button>
          </Link>
        </div>
      </div>

      <div className="flex-container flex-column flex-align-center">
        <div className="non-profit-apply">
          <div className="container header">
            <h2 className="font-size-32 font-weight-700">How to apply?</h2>
            <p className="font-size-20">In 3 simple steps</p>
          </div>
          <div className="steps">
            <div className="step step-one">
              <div className="container row">
                <div className="col-12 col-md-8">
                  <h3>1. Apply</h3>
                  <p>
                    Are you a non-profit organization aiming to boost your
                    professional appearance and strengthen your email
                    engagement? Share your organization's information with us to
                    initiate the process and take the first step towards more
                    impactful communication.
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <div className="step-img">
                    <img src={step1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="step step-two">
              <div className="container row">
                <div className="col-12 col-md-6">
                  <div className="step-img">
                    <img src={step2} alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <h3>2. Review</h3>
                  <p>
                    Within 3-5 business days, you’ll receive an email confirming
                    your eligibility and providing you with all the necessary
                    details to start creating personalized email signatures for
                    your team.
                  </p>
                </div>
              </div>
            </div>
            <div className="step step-tree">
              <div className="container row">
                <div className="col-12 col-md-8">
                  <h3>3. Get Started</h3>
                  <p>
                    Once your application is approved, gain access to our
                    non-profit pricing and begin designing professional,
                    cohesive email signatures that elevate your organization’s
                    message and outreach.
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <div className="step-img">
                    <img src={step3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonProfit;

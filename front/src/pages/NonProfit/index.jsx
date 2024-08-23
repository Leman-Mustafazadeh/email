/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import "./_style.scss";
import step1 from "../../assets/images/icons/Obj_1.png";
import step2 from "../../assets/images/icons/Obj_2.png";
import step3 from "../../assets/images/icons/Obj_3.png";
import puzzle from "../../assets/images/icons/pazl.png";
import promote from "../../assets/images/icons/promote.png";
import sosial from "../../assets/images/icons/sosial.png";
import target from "../../assets/images/icons/target.png";
import bell from "../../assets/images/icons/bell.png";

function NonProfit() {
  return (
    <div className="non-profit">
      <div className="container flex-container flex-column flex-align-center space">
        <div className="non-profit-signature row py-4">
          <div className="col-10 col-md-6 offset-md-3 offset-xs-1 non-profit-description">
            <PageHeader header="Email Signature for Non-Profit" fontSize="40" />
            <p className="text-align-center font-size-18">
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

      <div className="flex-container flex-column flex-align-center space">
        <div className="non-profit-apply">
          <div className="container header">
            <h2 className="font-size-32 font-weight-700">How to apply?</h2>
            <p className="font-size-20">In 3 simple steps</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-right"></div>
              <div className="container row p-4">
                <div className="col-12 col-md-8 flex-container flex-column flex-justify-center">
                  <div className="container col-8">
                    <h3>1. Apply</h3>
                    <p>
                      Are you a non-profit organization aiming to boost your
                      professional appearance and strengthen your email
                      engagement? Share your organization's information with us
                      to initiate the process and take the first step towards
                      more impactful communication.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 flex-container flex-column flex-justify-center flex-align-center">
                  <div className="step-img ">
                    <img src={step1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-left"></div>
              <div className="container row p-4">
                <div className="col-12 col-md-6 flex-container flex-column flex-justify-center flex-align-center">
                  <div className="step-img">
                    <img src={step2} alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 flex-container flex-column flex-justify-center">
                  <div className="container col-9">
                    <h3>2. Review</h3>
                    <p>
                      Within 3-5 business days, you’ll receive an email
                      confirming your eligibility and providing you with all the
                      necessary details to start creating personalized email
                      signatures for your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-right"></div>
              <div className="container row p-4">
                <div className="col-12 col-md-8 flex-container flex-column flex-justify-center">
                  <div className="container col-8">
                    <h3>3. Get Started</h3>
                    <p>
                      Once your application is approved, gain access to our
                      non-profit pricing and begin designing professional,
                      cohesive email signatures that elevate your organization’s
                      message and outreach.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 flex-container flex-column flex-justify-center flex-align-center">
                  <div className="step-img">
                    <img src={step3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container space">
        <div className="container header">
          <h2 className="font-size-32 font-weight-700">
            How Non-Profits Use Email Signatures
          </h2>
          <p className="font-size-20">Email signature tips</p>
        </div>
        <div className="row non-profit-tips">
          <div className="col-12 col-lg-6 px-5 py-2">
            <div className="tips-item row">
              <div className="col-3 ">
                <img src={puzzle} alt="" />
              </div>
              <div className="col-8 flex-container flex-column flex-justify-center">
                <div className="tips-item-description">
                  <h4>Create Consistent Branding</h4>
                  <p>
                    Ensure that every email sent from your team carries a
                    consistent and professional look by using standardized email
                    signatures that reflect your non-profit's branding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 px-5 py-2">
            <div className="tips-item row">
              <div className="col-3">
                <img src={promote} alt="" />
              </div>
              <div className="col-8 flex-container flex-column flex-justify-center">
                <div className="tips-item-description">
                  <h4>Promote Key Contacts</h4>
                  <p>
                    Include key contact information in your email signatures to
                    make it easy for stakeholders, volunteers, and partners to
                    reach the right people in your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 px-5 py-2">
            <div className="tips-item row">
              <div className="col-3">
                <img src={target} alt="" />
              </div>
              <div className="col-8 flex-container flex-column flex-justify-center">
                <div className="tips-item-description">
                  <h4>Showcase Your Mission</h4>
                  <p>
                    Use your email signatures to highlight your non-profit’s
                    mission statement, reminding recipients of the values and
                    goals your organization stands for.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 px-5 py-2">
            <div className="tips-item row">
              <div className="col-3">
                <img src={sosial} alt="" />
              </div>
              <div className="col-8 flex-container flex-column flex-justify-center">
                <div className="tips-item-description">
                  <h4>Feature Social Media Links</h4>
                  <p>
                    Add social media icons to your email signatures, encouraging
                    recipients to connect with your organization on various
                    platforms and stay updated on your activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-md-3 px-5 py-2">
            <div className="tips-item row">
              <div className="col-3">
                <img src={bell} alt="" />
              </div>
              <div className="col-8 flex-container flex-column flex-justify-center">
                <div className="tips-item-description">
                  <h4>Share Important Announcements</h4>
                  <p>
                    Utilize your email signatures to share important
                    announcements or updates, such as upcoming events,
                    newsletters, or new initiatives, directly in your daily
                    communications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex-container flex-column flex-align-center space">
        <div className="non-profit-signature row py-4 px-10">
          <div className="col-12 col-md-6 non-profit-description ">
            <h2>Email Signature for Non-Profit</h2>
            <p className="font-size-16">
              Verify your non-profit status by submitting your credentials and
              unlock a special offer designed to enhance your organization's
              email communications.
            </p>
          </div>
          <div className="col-12 col-md-6 flex-container flex-align-center flex-justify-end">
            <Link to="/contact-us">
              <button className="btn btn-primary text-natural">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonProfit;

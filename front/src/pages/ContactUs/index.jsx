/* eslint-disable react/no-unescaped-entities */
import "./_style.scss";
import icon from "./Icon.png";
import icon2 from "./Icon2.png";
import icon3 from "./Icon3.png";
import icon4 from "./Icon4.png";
import icon5 from "./Icon5.png";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="contact_head">
      <div className="container">
        <div className="contact">
          <h1 className="font-size-36 font-weight-700 text-primary mt-8  text-align-center ">
            Get in touch with us.
          </h1>
          <h1 className="font-size-36 font-weight-700 text-primary  text-align-center">
            We're here to assist you.
          </h1>
          <div className="contact_wrap">
            <div className="contact_title">
              <div>
                <img src={icon} alt="" />
              </div>
              <div>
                <h4 className="text-text60 font-size-20 font-weight-400 pb-2">
                  Location
                </h4>
                <Link>
                  {" "}
                  <p className="text-text font-size-20 font-weight-500">
                    407 Cubes 1, Beacon South Quarter, Sandyford, Dublin 18,
                    Ireland
                  </p>
                </Link>
              </div>
            </div>

            <div className="contact_title">
              <div>
                <img src={icon2} alt="" />
              </div>
              <div>
                <h4 className="text-text60 font-size-20 font-weight-400 pb-2">
                  Email
                </h4>
                <Link>
                  {" "}
                  <p className="text-text font-size-20 font-weight-500">
                    support@emailsignature.com
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero_head">
            <h1 className="font-size-40 font-weight-500 text-text10 pb-9 text-align-center">
              How can we help you?
            </h1>
            <div className="contact_hero row flex-justify-space-between flex-align-center">
              <div className="hero_wrap row">
                <div>
                  <img src={icon3} alt="" />
                </div>
                <div>
                  <h2 className="font-size-24 font-weight-500 text-text pb-2">
                    Help Center
                  </h2>
                  <p className="text-text60 ">Get answers and resources</p>
                </div>
              </div>

              <div className="hero_end row">
                <a
                  href=""
                  className="font-size-18 font-weight-500 text-primary"
                >
                  Visit page
                </a>
                <Link>
                  <img src={icon4} alt="" />
                </Link>
              </div>
            </div>

            <div className="contact_hero row flex-justify-space-between flex-align-center">
              <div className="hero_wrap row">
                <div>
                  <img src={icon5} alt="" />
                </div>
                <div>
                  <h2 className="font-size-24 font-weight-500 text-text pb-2">
                    {" "}
                    Help Center Get answers and resources
                  </h2>
                  <p className="text-text60 ">Reach out to us</p>
                </div>
              </div>

              <Link>
                {" "}
                <p className="support_contact text-text font-size-16 font-weight-500">
                  Contact support
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

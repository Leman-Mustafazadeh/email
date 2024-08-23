/* eslint-disable react/no-unescaped-entities */
import FreeTrial from "../Home/components/FreeTrial";
import "./_style.scss";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";

const AboutUs = () => {
  return (
    <section>
      <div className="container">
        <div className="about_head ">
          <h1 className="font-size-36 font-weight-700 text-primary pt-8 text-align-center">
            About Email Signature Generator
          </h1>
          <div>
            <h2 className="font-size-26 font-weight-600 text-text text-align-center">
              Our Story
            </h2>
            <p className="font-size-21 font-weight-400 text-text pt-4 text-align-center px-9">
              Our primary goal is to make every email you send more unique,
              impactful, and memorable. At the same time, we're here to support
              brands and businesses in building stronger, deeper connections.
              We're committed to this work because we believe everyone deserves
              the right to complete their emails with a lasting, impressive
              signature that leaves a mark—and that’s something we value deeply.
            </p>
          </div>

          <div className="row about_title">
            <div className="col-4 pr-5">
              <img src={img1} alt="" />
            </div>

            <div className="col-4 pr-5">
              <img src={img2} alt="" />
            </div>
            <div className="col-4">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className=" about_item text-align-center">
            <h2 className="font-size-28 font-weight-600 text-primary ">
              Email Signature Generator in Action: The Stats Behind Our Success
            </h2>
            <div className="row about_item_hero flex-justify-space-between">
              <div>
                <div>
                  <img src={img3} alt="" />
                </div>
                <h2 className="font-size-50 font-weight-600 text-inky ">
                  1 million+
                </h2>
                <p className="font-size-20 font-weight-500 text-text ">
                  Email signature generated
                </p>
              </div>

              <div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <h2 className="font-size-50 font-weight-600 text-inky ">90%</h2>
                <p className="font-size-20 font-weight-500 text-text ">
                  ROI Increase
                </p>
              </div>

              <div>
                <div>
                  <img src={img5} alt="" />
                </div>
                <h2 className="font-size-50 font-weight-600 text-inky ">
                  10000+{" "}
                </h2>
                <p className="font-size-20 font-weight-500 text-text ">
                  Leading companies
                </p>
              </div>
            </div>
          </div>

          <div className="free">
            <FreeTrial />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

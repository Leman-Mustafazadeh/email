import SectionHeader from "../../../../components/common/SectionHeader";
import design from "../../../../assets/images/createsign/design_signature.png";
import integrate from "../../../../assets/images/createsign/integrate_signature.png";
import boost from "../../../../assets/images/createsign/boost.png";
import line from "../../../../assets/images/createsign/Line_17.png";
import { Link } from "react-router-dom";

import "./_style.scss";

const CreateSign = () => {
  return (
    <div className="create-signature">
      <div className="create-signature-banners">
        <SectionHeader header="How to use" />
        <div className="container design">
          <div className="col-12">
            <Link to="#">
              <button className="btn border-primary text-primary">
                1. Design
              </button>
            </Link>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 design-description">
              <div className="col-9 design-description-text">
                <h2>
                  Design your signatures effortlessly with the easiest tool
                </h2>
                <p>
                  Easily create your email signatures using our provided
                  templates, with no additional design skills required! Showcase
                  your brand identity in every email you send.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={design} alt="Design your signature" />
            </div>
          </div>
        </div>

        <div className="line">
          <img src={line} alt="line" />
        </div>

        <div className="container design">
          <div className="col-12 flex-container flex-justify-end">
            <Link to="#">
              <button className="btn border-primary text-primary">
                2. Integrate
              </button>
            </Link>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={integrate} alt="Design your signature" />
            </div>
            <div className="col-12 col-md-6 design-description flex-container flex-justify-center">
              <div className="col-9 design-description-text">
                <h2>Integrate and Manage Your Email Signatures</h2>
                <p>
                  Effortlessly connect your email signatures with Gmail. Your
                  team members can easily link their signatures to their
                  accounts, update existing ones, and switch to new signatures
                  as needed. Simplify your workflow with our intuitive tools!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="line">
          <img src={line} alt="line" />
        </div>

        <div className="container design">
          <div className="col-12">
            <Link to="#">
              <button className="btn border-primary text-primary">
                3.Boost email campaigns
              </button>
            </Link>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 design-description">
              <div className="col-9 design-description-text">
                <h2>
                  Elevate Your Marketing Campaigns Using Signature Banners
                </h2>
                <p>
                  Increase the impact of your emails by adding eye-catching
                  banners to your email signatures. These banners not only make
                  your brand more visible but also boost engagement and
                  conversions. Customize them to fit your campaigns and see your
                  marketing results improve
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={boost} alt="Design your signature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSign;

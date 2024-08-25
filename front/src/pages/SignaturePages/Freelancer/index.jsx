/* eslint-disable react/no-unescaped-entities */
import Brands from "../../Home/components/Brands";
import CommonHeader from "../components/CommonHeader/CommonHeader";
import step1 from "../../../assets/images/icons/Obj_1.png";
import step2 from "../../../assets/images/icons/Obj_2.png";
import step3 from "../../../assets/images/icons/Obj_3.png";
import "./_style.scss";
import Explore from "../../Home/components/Explore";
import FreeTrial from "../../Home/components/FreeTrial";
import Customers from "../components/Customers/Customers";

function Freelancer() {
  return (
    <div className="freelancer-page">
      <CommonHeader
        header="Email Signature Ideas for Freelancers"
        paragraph="Create a Professional and Memorable Email Signature"
      />
      <Brands />
      <div className="flex-container flex-column flex-align-center space">
        <div className="steps-section">
          <div className="container header">
            <h2 className="font-size-32 font-weight-700">Feature and design</h2>
            <p className="font-size-20">
              Why Freelancers Need Professional Email Signatures
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-right"></div>
              <div className="container row p-4">
                <div className="col-12 col-md-8 flex-container flex-column flex-justify-center">
                  <div className="container col-8">
                    <h3>1. Build Your Personal Brand</h3>
                    <p>
                      Strengthen your personal brand by crafting a consistent
                      and professional email signature that not only reflects
                      your unique style and expertise but also enhances your
                      professional image. Every email you send is an opportunity
                      to showcase your skills and leave a lasting impression on
                      your clients.
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
                    <h3>2. Promote Your Services</h3>
                    <p>
                      Make it effortless for clients to discover more about your
                      work by including direct links to your portfolio, website,
                      or LinkedIn profile in your email signature. Not only does
                      this enhance your professional image, but it also invites
                      potential clients to engage with your content, view your
                      achievements, and easily reach out to you.
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
                    <h3>3. Increase Credibility</h3>
                    <p>
                      A thoughtfully designed email signature not only adds a
                      layer of credibility to every email you send but also
                      plays a crucial role in leaving a memorable impression on
                      clients and potential collaborators. By presenting
                      yourself professionally with a signature that aligns with
                      your brand, you enhance your chances of building trust and
                      forging strong relationships.
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
                    <h3>4. Stay Connected</h3>
                    <p>
                      Incorporate social media icons into your email signature
                      to ensure that clients can easily stay connected and
                      remain informed about your latest projects, achievements,
                      and updates. By including these icons, you not only make
                      it convenient for clients to follow your professional
                      journey across multiple platforms but also enhance your
                      online presence and engagement.
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
                    <h3>5. Highlight Your Availability</h3>
                    <p>
                      Leverage your email signature to communicate your current
                      availability, ensuring that clients are always informed
                      about when you're ready to take on new projects. By
                      clearly displaying your schedule in your signature, you
                      make it effortless for clients to see when you’re open for
                      collaboration, which can lead to more opportunities and
                      streamlined communication.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 flex-container flex-column flex-justify-center flex-align-center">
                  <div className="step-img">
                    <img src={step1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explore />
      <div className="space"></div>
      <FreeTrial />
      <Customers />
      <div className="space"></div>
    </div>
  );
}

export default Freelancer;

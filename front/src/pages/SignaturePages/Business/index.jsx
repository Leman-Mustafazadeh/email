import SectionHeader from "../../../components/common/SectionHeader";
import CommonHeader from "../components/CommonHeader/CommonHeader";
import handshake from "../../../assets/images/icons/handshake.png";
import comments from "../../../assets/images/icons/comments.png";
import handstar from "../../../assets/images/icons/handstar.png";
import key from "../../../assets/images/icons/key.png";
import items from "../../../assets/images/icons/items.png";
import protech from "../../../assets/images/icons/protech.png";
import "./_style.scss";
import FreeTrial from "../../Home/components/FreeTrial";
import Customers from "../components/Customers/Customers";

function Business() {
  return (
    <div className="business-page">
      <div className="mt-10">
        <CommonHeader
          header=" Professional Email Signatures for Your Business"
          paragraph="Empower your business communication with our email signature generator. Create consistent, brand-aligned signatures that not only enhance your professional image but also drive engagement and strengthen client relationships with every email."
        />
      </div>
      <div className="space"></div>
      <div className="business-signature">
        <div className="container px-10">
          <SectionHeader
            header="Why Every Business Needs Professional Email Signatures"
            paragpaph="In today’s digital landscape, email is a primary mode of communication for businesses. Your email signature is more than just a sign-off—it's an extension of your brand, a tool for engagement, and a means to create a lasting impression. Here’s why a professional email signature is essential for your business:"
          />
        </div>
        <div className="container grid gap-5"> 
          <div className="col-12">
            <div className="business-signature-item">
              <div className="mb-3">
                <img src={comments} alt="" />
              </div>
              <h4>Enhance Professionalism and Credibility</h4>
              <p>
                In a competitive market, maintaining a strong and consistent
                brand identity is crucial. A professional email signature allows
                you to seamlessly incorporate your company’s logo, brand colors,
                and fonts into
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="business-signature-item">
              <div className="mb-3">
                <img src={protech} alt="" />
              </div>
              <h4>Enhance Professionalism and Credibility</h4>
              <p>
                In a competitive market, maintaining a strong and consistent
                brand identity is crucial. A professional email signature allows
                you to seamlessly incorporate your company’s logo, brand colors,
                and fonts into
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="business-signature-item">
              <div className="mb-3">
                <img src={items} alt="" />
              </div>
              <h4>Enhance Professionalism and Credibility</h4>
              <p>
                In a competitive market, maintaining a strong and consistent
                brand identity is crucial. A professional email signature allows
                you to seamlessly incorporate your company’s logo, brand colors,
                and fonts into
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="business-signature-item">
              <div className="mb-3">
                <img src={handstar} alt="" />
              </div>
              <h4>Enhance Professionalism and Credibility</h4>
              <p>
                In a competitive market, maintaining a strong and consistent
                brand identity is crucial. A professional email signature allows
                you to seamlessly incorporate your company’s logo, brand colors,
                and fonts into
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="business-signature-item">
              <div className="mb-3">
                <img src={handshake} alt="" />
              </div>
              <h4>Enhance Professionalism and Credibility</h4>
              <p>
                In a competitive market, maintaining a strong and consistent
                brand identity is crucial. A professional email signature allows
                you to seamlessly incorporate your company’s logo, brand colors,
                and fonts into
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="business-signature-item">
              <div className="mb-3">
                <img src={key} alt="" />
              </div>
              <h4>Enhance Professionalism and Credibility</h4>
              <p>
                In a competitive market, maintaining a strong and consistent
                brand identity is crucial. A professional email signature allows
                you to seamlessly incorporate your company’s logo, brand colors,
                and fonts into
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="get-started">
        <SectionHeader
          header="How to Get Started with Professional Email Signatures for Your Business"
          paragpaph="Implementing professional email signatures across your business is easier than you might think. Follow these simple steps to get started:"
        />
        <div className="container row mt-6 pt-10">
          <div className="col-12 col-md-6 px-6">
            <div className="flex-container flex-column advices left ">
              <div className="advice"></div>
              <div className="advice"></div>
              <div className="advice"></div>
            </div>
          </div>
          <div className="col-12 col-md-6 px-6">
            <div className="flex-container flex-column flex-align-end advices right ">
              <div className="advice"></div>
              <div className="advice"></div>
            </div>
          </div>
        </div>
      </div>
      <FreeTrial />
      <Customers />
      <div className="space"></div>
    </div>
  );
}

export default Business;

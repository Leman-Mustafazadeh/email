import banner1 from "../../../../assets/images/use/Line 17.png";
import banner2 from "../../../../assets/images/use/Line1.png";
import banner3 from "../../../../assets/images/use/Line2.png";
import SectionHeader from "../../../../components/common/SectionHeader";
import "./_style.scss";

const CreateSign = () => {
  return (
    <div className="create-signature">
      <div className="container create-banners">
        <SectionHeader header="How to use" className="banners" />

        <div className="banners_item">
          <div className="banners_wrap">
            <button className="text-primary font-size-22 font-weight-500 bg-natural  border-primary">
              1.Design
            </button>
            <div className="row banners_title  ">
              <div className="left_banners col-12 col-lg-6">
                <h2 className="text-text10  font-size-24 font-weight-500 mb-4 ">
                  Design your signatures effortlessly with the easiest tool
                </h2>
                <p className="font-size-18  text-text30 font-weight-400">
                  Easily create your email signatures using our provided
                  templates, with no additional design skills required! Showcase
                  your brand identity in every email you send.
                </p>
              </div>
              <div className="right_banners col-12 col-lg-6">
                <img src={banner2} alt="" />
              </div>
            </div>
            <div className="banner_line">
              <img src={banner1} alt="" />
            </div>
          </div>

          <div className="banners_wrap">
            <div className="row banner_middle flex-align-end  flex-justify-end ">
              <button className="text-primary font-size-22 font-weight-500 bg-natural row border-primary flex-align-end  flex-justify-end  ">
                2.Integrate
              </button>
            </div>
            <div className="row  banner_middle_title flex-justify-space-evenly ">
              <div className="right_banners col-12 col-lg-4">
                <img src={banner3} alt="" />
              </div>

              <div className="left_banners col-12 col-lg-4">
                <h2 className="text-text10  font-size-24 font-weight-500 mb-4 ">
                  Integrate and Manage Your Email Signatures
                </h2>
                <p className="font-size-18  text-text30 font-weight-400">
                  Effortlessly connect your email signatures with Gmail. Your
                  team members can easily link their signatures to their
                  accounts, update existing ones, and switch to new signatures
                  as needed. Simplify your workflow with our intuitive tools!
                </p>
              </div>
            </div>
            <div className="banner_line">
              <img src={banner1} alt="" />
            </div>
          </div>

          <div className="banners_wrap">
            <div className="banners_end">
              <button className="text-primary font-size-22 font-weight-500 bg-natural  border-primary">
                3.Boost email campaigns
              </button>
            </div>
            <div className="row banners_title  ">
              <div className="left_banners col-12 col-lg-6">
                <h2 className="text-text10  font-size-24 font-weight-500 mb-10 ">
                  Elevate Your Marketing Campaigns Using Signature Banners
                </h2>
                <p className="font-size-18  text-text30 font-weight-400">
                  Increase the impact of your emails by adding eye-catching
                  banners to your email signatures. These banners not only make
                  your brand more visible but also boost engagement and
                  conversions. Customize them to fit your campaigns and see your
                  marketing results improve
                </p>
              </div>
              <div className="right_banners col-12 col-lg-6">
                <img src={banner2} alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default CreateSign;

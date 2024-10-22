import { Link } from "react-router-dom";
import banner1 from "../../../../assets/images/use/Line 17.png";
import banner2 from "../../../../assets/images/use/Line1.png";
import banner3 from "../../../../assets/images/use/Line2.png";
import banner4 from "../../../../assets/images/use/banner3.gif";
import banner6 from "../../../../assets/images/use/banner4.gif";
import banner5 from "../../../../assets/images/use/banner5.png";
import SectionHeader from "../../../../components/common/SectionHeader";
import "./_style.scss";

const CreateSign = () => {
  return (
    <div className="create-signature">
      <div className="create-banners container">
        <SectionHeader header="How to use" />

        <div className="banners_items">
         <p className="font-weight-500 font-size-24 bn_wrap text-primary ">1</p>

          <div className="banners_wrap">
            <div className="row flex-justify-start flex-justify-md-center">
              <Link to="#">
                <button>1.Design</button>
              </Link>
            </div>
            <div className="row banners_title">
              <div className="col-12 col-lg-6 banner_title_design">
                <div className="col-12 col-lg-9 ">
                  <h2 className="mb-4">
                    Design your signatures effortlessly with the easiest tool
                  </h2>
                  <p>
                    Easily create your email signatures using our provided
                    templates, with no additional design skills required!
                    Showcase your brand identity in every email you send.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 banner_right">
                <img src={banner2} alt="" />
              </div>
            </div>
          </div>

          <p className="font-weight-500 font-size-24 bns_wrap text-primary bn_wrap ">2</p>

          <div className="banners_wrap container">
            <div className="row ">
              <Link to="#">
                <button>2.Integrate</button>
              </Link>
            </div>
            <div className="row flex-justify-space-between  banners_title">
            <div className="col-12 col-lg-6 banner_title_integrate banner_integrate">
                <h2 className="mb-4 ">
                  Integrate and Manage Your Email Signatures
                </h2>
                <p>
                  Effortlessly connect your email signatures with Gmail. Your
                  team members can easily link their signatures to their
                  accounts, update existing ones, and switch to new signatures
                  as needed. Simplify your workflow with our intuitive tools!
                </p>
              </div>

              <div className="col-12 col-lg-6 banner_title_integrate banner_integrate_image">
                <img src={banner3} alt="" />
              </div>
            
            </div>
          </div>
          <p className="font-weight-500 font-size-24  bns_wrap bn_wrap text-primary ">3</p>
       

          <div className="banners_wrap container btn_wrap">
            <div className="row flex-justify-start flex-justify-md-center">
              <Link to="#">
                <button>3.Boost email campaigns</button>
              </Link>
            </div>
            <div className="row banners_title ">
              <div className="col-12 col-lg-6 banner_title_integrate banner_integrate">
                <h2 className="mb-10 ">
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
            <div className="col-12 col-lg-6 banner_title_integrate banner_integrate_image banner_last">
            <div className="">
                <img src={banner5} alt="" />
            </div>

            
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSign;

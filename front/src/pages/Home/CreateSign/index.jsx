import { Link } from "react-router-dom";
import banner1 from "../../../../assets/images/use/Line 17.png";
import banner2 from "../../../../assets/images/use/Line1.png";
import banner3 from "../../../../assets/images/use/Line2.png";
import banner4 from "../../../../assets/images/use/banner3.gif";
import banner6 from "../../../../assets/images/use/banner4.gif";
import banner5 from "../../../../assets/images/use/banner1.gif";
import SectionHeader from "../../../../components/common/SectionHeader";
import "./_style.scss";

const CreateSign = () => {
  return (
    <div className="create-signature">
      <div className="create-banners">
        <SectionHeader header="How to use" />

        <div className="banners_items">
          <div className="banners_wrap container">
            <div className="row flex-justify-start flex-justify-md-center">
              <Link to="#">
                <button>1.Design</button>
              </Link>
            </div>
            <div className="row banners_title">
              <div className="col-12 col-lg-6">
                <div className="col-12 col-lg-9">
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
              <div className="col-12 col-lg-6">
                <img src={banner2} alt="" />
              </div>
            </div>
          </div>

          <div className="banner_line">
            <img src={banner1} alt="" />
          </div>

          <div className="banners_wrap container">
            <div className="row flex-justify-end flex-justify-md-center">
              <Link to="#">
                <button>2.Integrate</button>
              </Link>
            </div>
            <div className="row flex-justify-space-evenly banners_title">
              <div className="col-12 col-lg-4">
                <img src={banner3} alt="" />
              </div>
              <div className="col-12 col-lg-4">
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
            </div>
          </div>

          <div className="banner_line">
            <img src={banner1} alt="" />
          </div>

          <div className="banners_wrap container">
            <div className="row flex-justify-start flex-justify-md-center">
              <Link to="#">
                <button>3.Boost email campaigns</button>
              </Link>
            </div>
            <div className="row banners_title ">
              <div className="col-12 col-lg-6">
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
            <div className="col-12 col-lg-6">
            <div className="gif">
                <img src={banner5} alt="" />
            </div>

              <div className="gif1">
                <svg
                  width="25"
                  height="71"
                  viewBox="0 0 25 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1493 0.271853C22.007 0.129535 21.7762 0.129535 21.6339 0.271853L19.3147 2.59105C19.1724 2.73337 19.1724 2.96411 19.3147 3.10643C19.457 3.24874 19.6878 3.24874 19.8301 3.10643L21.8916 1.04492L23.9531 3.10643C24.0954 3.24874 24.3262 3.24874 24.4685 3.10643C24.6108 2.96411 24.6108 2.73337 24.4685 2.59105L22.1493 0.271853ZM1.06111 70.697C1.5687 69.9102 2.10715 69.0298 2.66973 68.0635L2.03985 67.6968C1.48205 68.6549 0.949401 69.5257 0.448656 70.3018L1.06111 70.697ZM5.61332 62.6295C6.48569 60.9121 7.38426 59.0504 8.29065 57.065L7.62762 56.7623C6.72529 58.7388 5.83111 60.5914 4.96349 62.2994L5.61332 62.6295ZM10.7473 51.4098C11.5092 49.566 12.2649 47.6477 13.0036 45.6673L12.3207 45.4126C11.585 47.3849 10.8324 49.2953 10.0737 51.1315L10.7473 51.4098ZM15.0589 39.848C15.7001 37.925 16.3181 35.959 16.9041 33.9598L16.2047 33.7547C15.6212 35.745 15.006 37.7025 14.3674 39.6175L15.0589 39.848ZM18.5244 28.0054C19.0227 26.0187 19.4833 24.0096 19.8985 21.9869L19.1845 21.8403C18.7715 23.8522 18.3133 25.8511 17.8175 27.8281L18.5244 28.0054ZM20.9962 15.9108C21.313 13.8706 21.5768 11.8253 21.7798 9.78352L21.0545 9.71144C20.853 11.7391 20.5909 13.7711 20.276 15.7989L20.9962 15.9108ZM22.2003 3.61908C22.2371 2.5857 22.256 1.55546 22.256 0.529541H21.5272C21.5272 1.54651 21.5084 2.56809 21.4719 3.59314L22.2003 3.61908Z"
                    fill="#3C3C3C"
                  />
                </svg>
              </div>

              <div className="gif gif2 ">
                <img src={banner4} alt="" />
              </div>

              <div className="">
                <svg
                  width="25"
                  height="71"
                  viewBox="0 0 25 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1493 0.271853C22.007 0.129535 21.7762 0.129535 21.6339 0.271853L19.3147 2.59105C19.1724 2.73337 19.1724 2.96411 19.3147 3.10643C19.457 3.24874 19.6878 3.24874 19.8301 3.10643L21.8916 1.04492L23.9531 3.10643C24.0954 3.24874 24.3262 3.24874 24.4685 3.10643C24.6108 2.96411 24.6108 2.73337 24.4685 2.59105L22.1493 0.271853ZM1.06111 70.697C1.5687 69.9102 2.10715 69.0298 2.66973 68.0635L2.03985 67.6968C1.48205 68.6549 0.949401 69.5257 0.448656 70.3018L1.06111 70.697ZM5.61332 62.6295C6.48569 60.9121 7.38426 59.0504 8.29065 57.065L7.62762 56.7623C6.72529 58.7388 5.83111 60.5914 4.96349 62.2994L5.61332 62.6295ZM10.7473 51.4098C11.5092 49.566 12.2649 47.6477 13.0036 45.6673L12.3207 45.4126C11.585 47.3849 10.8324 49.2953 10.0737 51.1315L10.7473 51.4098ZM15.0589 39.848C15.7001 37.925 16.3181 35.959 16.9041 33.9598L16.2047 33.7547C15.6212 35.745 15.006 37.7025 14.3674 39.6175L15.0589 39.848ZM18.5244 28.0054C19.0227 26.0187 19.4833 24.0096 19.8985 21.9869L19.1845 21.8403C18.7715 23.8522 18.3133 25.8511 17.8175 27.8281L18.5244 28.0054ZM20.9962 15.9108C21.313 13.8706 21.5768 11.8253 21.7798 9.78352L21.0545 9.71144C20.853 11.7391 20.5909 13.7711 20.276 15.7989L20.9962 15.9108ZM22.2003 3.61908C22.2371 2.5857 22.256 1.55546 22.256 0.529541H21.5272C21.5272 1.54651 21.5084 2.56809 21.4719 3.59314L22.2003 3.61908Z"
                    fill="#3C3C3C"
                  />
                </svg>
              </div> 

              <div className="gif">
                <img src={banner6} alt="" />
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

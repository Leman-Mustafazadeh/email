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
          <h1 className="font-size-36 font-weight-700 text-primary mt-8 text-align-center ">
            Get in touch with us.
          </h1>
          <h1 className="font-size-36 font-weight-700 text-primary text-align-center">
            We're here to assist you.
          </h1>
          <div className="contact_wrap">
            <div className="contact_title">
              <div>
              <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.4314 15.5304C31.4314 7.0328 24.5245 0.142822 16.0028 0.142822C7.48111 0.142822 0.574219 7.0328 0.574219 15.5304C0.574219 21.5861 4.30996 28.8955 11.6834 37.576C13.701 39.9513 17.2705 40.2482 19.656 38.2393C19.8962 38.037 20.119 37.8151 20.3222 37.576C27.6956 28.8955 31.4314 21.5861 31.4314 15.5304ZM17.4419 35.6327C16.5022 36.4241 15.096 36.3071 14.3012 35.3714C7.40292 27.2503 4.00279 20.5976 4.00279 15.5304C4.00279 8.91679 9.37609 3.55666 16.0028 3.55666C22.6295 3.55666 28.0028 8.91679 28.0028 15.5304C28.0028 20.5976 24.6027 27.2503 17.7044 35.3714C17.6243 35.4656 17.5366 35.553 17.4419 35.6327ZM9.14565 15.5051C9.14565 11.7352 12.2167 8.67742 16.0028 8.67742C19.7889 8.67742 22.8599 11.7352 22.8599 15.5051C22.8599 19.2749 19.7889 22.3328 16.0028 22.3328C12.2167 22.3328 9.14565 19.2749 9.14565 15.5051ZM12.5742 15.5051C12.5742 17.3895 14.1102 18.9189 16.0028 18.9189C17.8954 18.9189 19.4314 17.3895 19.4314 15.5051C19.4314 13.6207 17.8954 12.0913 16.0028 12.0913C14.1102 12.0913 12.5742 13.6207 12.5742 15.5051Z" fill="#3C3C3C"/>
</svg>

              </div>
              <div>
                <h4 className="text-text font-size-20 font-weight-400 pb-2">
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
              <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7648 0.285401H11.6887H11.6886C10.0557 0.285381 8.72023 0.285365 7.6349 0.37404C6.51149 0.465826 5.49688 0.661609 4.54933 1.14441C3.06638 1.90001 1.8607 3.10569 1.1051 4.58864C0.622302 5.53619 0.426519 6.5508 0.334732 7.67421C0.246057 8.75955 0.246074 10.095 0.246094 11.7279V11.728V11.8042V20.6958V20.772V20.772C0.246074 22.405 0.246057 23.7404 0.334733 24.8258C0.426519 25.9492 0.622302 26.9638 1.1051 27.9113C1.8607 29.3943 3.06638 30.6 4.54933 31.3556C5.49688 31.8384 6.51149 32.0341 7.6349 32.1259C8.72024 32.2146 10.0557 32.2146 11.6887 32.2146H11.7648H28.7398H28.816C30.449 32.2146 31.7844 32.2146 32.8698 32.1259C33.9932 32.0341 35.0078 31.8384 35.9554 31.3556C37.4383 30.6 38.644 29.3943 39.3996 27.9113C39.8824 26.9638 40.0782 25.9492 40.17 24.8258C40.2586 23.7404 40.2586 22.405 40.2586 20.772V20.6958V11.8042V11.728C40.2586 10.095 40.2586 8.75955 40.17 7.67421C40.0782 6.5508 39.8824 5.53619 39.3996 4.58864C38.644 3.10569 37.4383 1.90001 35.9554 1.14441C35.0078 0.661609 33.9932 0.465826 32.8698 0.37404C31.7845 0.285365 30.449 0.285381 28.8161 0.285401H28.816H28.7398H11.7648ZM6.87571 4.14957C7.14967 4.08621 7.49036 4.03547 7.93111 3.99946C8.8508 3.92432 10.0372 3.9229 11.7648 3.9229H28.7398C30.4675 3.9229 31.6539 3.92432 32.5736 3.99946C33.0143 4.03547 33.355 4.08621 33.629 4.14957L25.5274 11.2385C24.3597 12.2602 23.5602 12.9581 22.8945 13.4559C22.247 13.9401 21.8351 14.1494 21.4787 14.2548C20.6783 14.4915 19.8264 14.4915 19.026 14.2548C18.6696 14.1494 18.2577 13.9401 17.6102 13.4559C16.9445 12.9581 16.145 12.2602 14.9773 11.2385L6.87571 4.14957ZM4.18752 6.6308C4.08742 6.94541 4.00979 7.36283 3.96015 7.97042C3.88501 8.89011 3.8836 10.0765 3.8836 11.8042V20.6958C3.8836 22.4235 3.88501 23.6099 3.96015 24.5296C4.03356 25.428 4.16816 25.9106 4.34614 26.2599C4.753 27.0585 5.40221 27.7077 6.20072 28.1145C6.55002 28.2925 7.03265 28.4271 7.93111 28.5005C8.8508 28.5757 10.0372 28.5771 11.7648 28.5771H28.7398C30.4675 28.5771 31.6539 28.5757 32.5736 28.5005C33.472 28.4271 33.9547 28.2925 34.304 28.1145C35.1025 27.7077 35.7517 27.0585 36.1586 26.2599C36.3365 25.9106 36.4711 25.428 36.5445 24.5296C36.6197 23.6099 36.6211 22.4235 36.6211 20.6958V11.8042C36.6211 10.0765 36.6197 8.89011 36.5445 7.97042C36.4949 7.36283 36.4173 6.94541 36.3172 6.63079L27.9227 13.976L27.8697 14.0223C26.768 14.9863 25.8638 15.7775 25.0729 16.369C24.2511 16.9835 23.4444 17.4667 22.5103 17.743C21.0365 18.1788 19.4682 18.1788 17.9944 17.743C17.0603 17.4667 16.2536 16.9835 15.4318 16.369C14.6409 15.7775 13.7367 14.9864 12.6351 14.0224L12.582 13.976L4.18752 6.6308Z" fill="#3C3C3C"/>
</svg>

              </div>
              <div>
                <h4 className="text-text font-size-20 font-weight-400 pb-2">
                  Email
                </h4>
                <Link>
                  {" "}
                  <p className="text-text font-size-20 font-weight-500">
                   <a href="support@emailsignature.com">support@emailsignature.com</a>
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
                <div className="help">
                  <h2 className="font-size-24 font-weight-500 text-text pb-2">
                    Help Center
                  </h2>
                  <p className="text-text60 ">Get answers and resources</p>
                </div>
              </div>

              <div className="hero_end row help">
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

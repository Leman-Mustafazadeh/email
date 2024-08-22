import { useEffect, useRef } from "react";
import "./_scroll.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import SectionHeader from "../../../../components/common/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const ScrollBanner = () => {
  const bannerRef = useRef([]);

  const bannerData = [
   
    {
      title: "Design",
      item:"Design your signatures effortlessly with the easiest tool",
      note:"Easily create your email signatures using our provided templates, with no additional design skills required! Showcase your brand identity in every email you send.",
      button: "Create your signature",
      className: "bg-primary60",
      path: "/sign-up", 
    },
    {
      title: "Design",
      item:"Integrate and Manage Your Email Signatures",
      note:"Effortlessly connect your email signatures with Gmail. Your team members can easily link their signatures to their accounts, update existing ones, and switch to new signatures as needed. Simplify your workflow with our intuitive tools!",
      className: "bg-primary30",
    },
    {
      title: "Design",
      item:"Elevate Your Marketing Campaigns Using Signature Banners",
      note:"Increase the impact of your emails by adding eye-catching banners to your email signatures. These banners not only make your brand more visible but also boost engagement and conversions. Customize them to fit your campaigns and see your marketing results improve",
      className: "bg-primary",
     
      path: "#",
    },
  ];

  useEffect(() => {
    bannerRef.current.forEach((elem, index) => {
      if (index === bannerRef.current.length - 1) return;

      ScrollTrigger.create({
        trigger: elem,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="create-signature">
      <div className="container create-banners">
        <SectionHeader header="How to use" />
        {bannerData.map((banner, index) => (
          <div
            className={`container banner ${banner.className}`}
            key={index}
            ref={(elem) => (bannerRef.current[index] = elem)}
          >
            <div className="banner-header">
              <h3>{banner.title}</h3>
            </div>
            <div className="row banner-content">
              <div className="col-12 col-md-6 banner-description">
                <h4>{banner.item}</h4>
                <p className="">
                  {banner.note}
                </p>
                {banner.button && (
                  <Link to={banner.path}>
                    <button className="btn btn-primary text-natural">
                      {banner.button}
                    </button>
                  </Link>
                )}
              </div>
              <div className="col-12 col-md-6 banner-template">
                <div className="template-box">
                  <p>Template design</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBanner;

import { useEffect, useRef } from "react";
import "./_style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SectionHeader from "../../../common/SectionHeader";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CreateSign = () => {
  const bannerRef = useRef([]);

  const bannerData = [
    {
      title: "Design",
      className: "bg-primary30",
    },
    {
      title: "Integrate",
      item:"Integrate and Manage Your Email Signatures",
      note:"Effortlessly connect your email signatures with Gmail. Your team members can easily link their signatures to their accounts, update existing ones, and switch to new signatures as needed. Simplify your workflow with our intuitive tools!",
      className: "bg-primary60",
    },
    {
      title: "Design",
      className: "bg-primary90",
      button: "Try it now",
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
                <h4>On-brand email signatures in just 3 clicks</h4>
                <p className="mb-5">
                  Import your logo. Letsignite automatically generates email
                  signature templates based on your brand colors.Use the Drag &
                  Drop Designer to customize each signature template to meet
                  your brand charter.
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

export default CreateSign;

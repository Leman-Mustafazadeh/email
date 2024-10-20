import { LuMail, LuPhone } from "react-icons/lu";
import PropTypes from "prop-types";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import QRCode from "react-qr-code";
import banner1 from "../../../../assets/images/templates/Frame-2095584541.png";

export const TemplateBoard = ({
  watch,
  profileImageUrl,
  setIconColor,
  getQRCodeColors,
}) => {
  const formValues = watch();

  return (
    <div className="template row `">
      <div className="banner col-12 col-md-6">
        <div className="generator_banner_right">
          <div
            className="right-regard row"
            style={{ backgroundColor: formValues.backgroundColor }}
          >
            <div className="col-md-3 right-regard-img">
              <img
                src={profileImageUrl || "https://via.placeholder.com/130"}
                alt="Uploaded"
                style={{
                  width: "129px",
                  height: "129px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="col-md-6 right-regard-container">
              <div className="right-regard-name">
                <h2
                  style={{
                    color: formValues.fontColor,
                    fontFamily: formValues.font,
                  }}
                >
                  {formValues.fullName || "Your Name"}
                </h2>
                <p
                  style={{
                    color: formValues.fontColor,
                    fontFamily: formValues.font,
                  }}
                >
                  {formValues.position || "Your Position"}
                </p>
              </div>

              <div className="right-regard-contacts">
                <div className="right-regard-contacts-item">
                  <LuMail style={{ color: setIconColor() }} />
                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.email || "Your Email"}
                  </p>
                </div>
                <div className="right-regard-contacts-item">
                  <FiMapPin style={{ color: setIconColor() }} />

                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.address || "Your Address"}
                  </p>
                </div>
                <div className="right-regard-contacts-item">
                  <LuPhone style={{ color: setIconColor() }} />
                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.phone || "Your Phone"}
                  </p>
                </div>
                <div className="sosial-icons">
                  <Link to={formValues.instagramUrl}>
                    <FaInstagram style={{ color: setIconColor() }} />
                  </Link>
                  <Link to={formValues.facebookUrl}>
                    <FaFacebookSquare style={{ color: setIconColor() }} />
                  </Link>
                  <Link to={formValues.linkedinUrl}>
                    <FaLinkedin style={{ color: setIconColor() }} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 right-regard-qr px-2">
              <QRCode
                value={formValues.qrCoreBase64 || " "}
                style={{ height: "107px", width: "107px" }}
                {...getQRCodeColors()}
              />
            </div>
          </div>

          <div className="banner-img px-3 pb-2">
            <img src={banner1} alt="" />
          </div>
        </div>
      </div>
      <div className="banner col-12 col-md-6">
        <div className="generator_banner_right">
          <div
            className="right-regard row"
            style={{ backgroundColor: formValues.backgroundColor }}
          >
            <div className="col-md-3 right-regard-img">
              <img
                src={profileImageUrl || "https://via.placeholder.com/130"}
                alt="Uploaded"
                style={{
                  width: "129px",
                  height: "129px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="col-md-6 right-regard-container">
              <div className="right-regard-name">
                <h2
                  style={{
                    color: formValues.fontColor,
                    fontFamily: formValues.font,
                  }}
                >
                  {formValues.fullName || "Your Name"}
                </h2>
                <p
                  style={{
                    color: formValues.fontColor,
                    fontFamily: formValues.font,
                  }}
                >
                  {formValues.position || "Your Position"}
                </p>
              </div>

              <div className="right-regard-contacts">
                <div className="right-regard-contacts-item">
                  <LuMail style={{ color: setIconColor() }} />
                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.email || "Your Email"}
                  </p>
                </div>
                <div className="right-regard-contacts-item">
                  <FiMapPin style={{ color: setIconColor() }} />

                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.address || "Your Address"}
                  </p>
                </div>
                <div className="right-regard-contacts-item">
                  <LuPhone style={{ color: setIconColor() }} />
                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.phone || "Your Phone"}
                  </p>
                </div>
                <div className="sosial-icons">
                  <Link to={formValues.instagramUrl}>
                    <FaInstagram style={{ color: setIconColor() }} />
                  </Link>
                  <Link to={formValues.facebookUrl}>
                    <FaFacebookSquare style={{ color: setIconColor() }} />
                  </Link>
                  <Link to={formValues.linkedinUrl}>
                    <FaLinkedin style={{ color: setIconColor() }} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 right-regard-qr px-2">
              <QRCode
                value={formValues.qrCoreBase64 || " "}
                style={{ height: "107px", width: "107px" }}
                {...getQRCodeColors()}
              />
            </div>
          </div>

          <div className="banner-img px-3 pb-2">
            <img src={banner1} alt="" />
          </div>
        </div>
      </div>
      <div className="banner col-12 col-md-6">
        <div className="generator_banner_right">
          <div
            className="right-regard row"
            style={{ backgroundColor: formValues.backgroundColor }}
          >
            <div className="col-md-3 right-regard-img">
              <img
                src={profileImageUrl || "https://via.placeholder.com/130"}
                alt="Uploaded"
                style={{
                  width: "129px",
                  height: "129px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="col-md-6 right-regard-container">
              <div className="right-regard-name">
                <h2
                  style={{
                    color: formValues.fontColor,
                    fontFamily: formValues.font,
                  }}
                >
                  {formValues.fullName || "Your Name"}
                </h2>
                <p
                  style={{
                    color: formValues.fontColor,
                    fontFamily: formValues.font,
                  }}
                >
                  {formValues.position || "Your Position"}
                </p>
              </div>

              <div className="right-regard-contacts">
                <div className="right-regard-contacts-item">
                  <LuMail style={{ color: setIconColor() }} />
                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.email || "Your Email"}
                  </p>
                </div>
                <div className="right-regard-contacts-item">
                  <FiMapPin style={{ color: setIconColor() }} />

                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.address || "Your Address"}
                  </p>
                </div>
                <div className="right-regard-contacts-item">
                  <LuPhone style={{ color: setIconColor() }} />
                  <p
                    style={{
                      color: formValues.fontColor,
                      fontFamily: formValues.font,
                    }}
                  >
                    {formValues.phone || "Your Phone"}
                  </p>
                </div>
                <div className="sosial-icons">
                  <Link to={formValues.instagramUrl}>
                    <FaInstagram style={{ color: setIconColor() }} />
                  </Link>
                  <Link to={formValues.facebookUrl}>
                    <FaFacebookSquare style={{ color: setIconColor() }} />
                  </Link>
                  <Link to={formValues.linkedinUrl}>
                    <FaLinkedin style={{ color: setIconColor() }} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 right-regard-qr px-2">
              <QRCode
                value={formValues.qrCoreBase64 || " "}
                style={{ height: "107px", width: "107px" }}
                {...getQRCodeColors()}
              />
            </div>
          </div>

          <div className="banner-img px-3 pb-2">
            <img src={banner1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

TemplateBoard.propTypes = {
  handleSubmit: PropTypes.func,
  setValue: PropTypes.func,
  register: PropTypes.func,
  watch: PropTypes.func,
  profileImageUrl: PropTypes.string,
  setIconColor: PropTypes.func,
  getQRCodeColors: PropTypes.func,
};

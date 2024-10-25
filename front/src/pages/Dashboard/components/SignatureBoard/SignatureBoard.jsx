import { Switch } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { LuClock4, LuMail, LuPhone } from "react-icons/lu";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import banner1 from "../../../../assets/images/templates/Frame-2095584541.png";
import { Delete, Edit } from "../../../../utils/icons";
import { Icon } from "../../../../utils/icons/icons";

export const SignatureBoard = ({
  watch,
  profileImageUrl,
  setIconColor,
  getQRCodeColors,
}) => {
  const formValues = watch();

  // ==== switch button antd ====
  const [checked, setChecked] = useState(false);

  const handleChange = (checkedValue) => {
    setChecked(checkedValue);
  };

  return (
    <div className="signature">
      <div className="signature-template">
        <div className="row gap-4">
          <div className="banner col-md-8">
            <div className="generator_banner_right">
              <div
                className="right-regard row gap-3"
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
          <div className="signature-info col-md-4">
            <h3>Template name</h3>
            <div className="user-data">
              <p>Admin</p>
              <div className="email mt-2">
                <img src="" alt="" />
                {formValues.email}
              </div>
            </div>
            <div className="clock">
              <LuClock4 />
              <span>31/07/2024</span>
            </div>
            <div className="user-status">
              <p>Status</p>
              <div className="switch-button my-2">
                <Switch checked={checked} onChange={handleChange} />
              </div>
              <span>Integrated</span>
            </div>
            <div className="edit-remove flex-container">
              <Icon icon={Edit} color={"#B1B1B1"} />
              <Icon icon={Delete} color={"#B1B1B1"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignatureBoard.propTypes = {
  handleSubmit: PropTypes.func,
  setValue: PropTypes.func,
  register: PropTypes.func,
  watch: PropTypes.func,
  profileImageUrl: PropTypes.string,
  setIconColor: PropTypes.func,
  getQRCodeColors: PropTypes.func,
};

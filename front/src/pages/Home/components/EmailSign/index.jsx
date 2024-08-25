import { MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { LuMail, LuPhone } from "react-icons/lu";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import PageHeader from "../../../../components/common/PageHeader";
import "./_style.scss";

const colors = [
  { color: "000000" },
  { color: "ffffff" },
  { color: "21548F" },
  { color: "1A73E8" },
  { color: "34A853" },
  { color: "FB7701" },
  { color: "E9B2B3" },
  { color: "8F2123" },
  { color: "DF6818" },
  { color: "26C843" },
  { color: "FF6BC1" },
];

const fonts = [
  "Roboto",
  "Arial",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Raleway",
  "Oswald",
  "PT Sans",
  "Quicksand",
  "Work Sans",
  "Playfair Display",
];

const EmailSign = () => {
  const [selectedItem, setSelectedItem] = useState("upload");
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [formValues, setFormValues] = useState({
    fullName: "",
    company: "",
    position: "",
    phone: "",
    email: "",
    address: "",
    font: "Montserrat",
    fontColor: "#000000",
    backgroundColor: "#ffffff",
  });

  const iconColor = "#1251A3";

  const setIconColor = () => {
    if (
      formValues.backgroundColor === "#ffffff" &&
      formValues.fontColor === "#000000"
    ) {
      return iconColor;
    }
    return formValues.fontColor;
  };

  const getQRCodeColors = () => {
    const fgColor = !socialUrl.qrCode
      ? "#D3D3D3"
      : formValues.backgroundColor === "#000000"
      ? "#ffffff"
      : "#000000";

    return { fgColor, bgColor: formValues.backgroundColor };
  };

  const handleCategoryClick = (category) => {
    setSelectedItem(category);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phone,
    }));
  };

  const handleColorItemClick = (color, type) => {
    if (type === "font") {
      setFormValues((prevValues) => ({
        ...prevValues,
        fontColor: color,
      }));
    } else if (type === "background") {
      setFormValues((prevValues) => ({
        ...prevValues,
        backgroundColor: color,
      }));
    }
  };

  const onChange = ({ fileList: newFileList }) => {
    const singleFileList = newFileList.slice(-1);
    setFileList(singleFileList);

    if (singleFileList.length > 0) {
      const file = singleFileList[0].originFileObj;
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setUploadedImageUrl(imageURL);
      }
    } else {
      setUploadedImageUrl(null);
    }
  };

  const [socialUrl, setSocialUrl] = useState({
    instagram: "",
    facebook: "",
    linkedln: "",
    qrCode: "",
  });

  return (
    <section>
      <div className="container">
        <PageHeader header="Free online Email Signature Generator" />
        <p className="font-size-20 font-weight-400 py-3 text-align-center">
          Measure, track and maximize your Email signature
        </p>

        <div className="generator">
          <div className="generator_banner row mt-3">
            <div className="col-12 pr-2 col-lg-6">
              <div className="generator_banner_left">
                <div className="text p-4">
                  <TextField
                    style={{ width: "100%" }}
                    label="Full Name"
                    variant="outlined"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                    InputProps={{
                      style: {
                        height: 41,
                        fontSize: 14,
                        textAlign: "center",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: 12,
                      },
                    }}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    label="Company"
                    variant="outlined"
                    name="company"
                    value={formValues.company}
                    onChange={handleInputChange}
                    InputProps={{
                      style: {
                        height: 41,
                        fontSize: 14,
                        textAlign: "center",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: 12,
                      },
                    }}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    label="Position"
                    variant="outlined"
                    name="position"
                    value={formValues.position}
                    onChange={handleInputChange}
                    InputProps={{
                      style: {
                        height: 41,
                        fontSize: 14,
                        textAlign: "center",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: 12,
                      },
                    }}
                  />
                  <PhoneInput
                    country={"us"}
                    value={formValues.phone}
                    onChange={handlePhoneChange}
                    inputStyle={{ width: "100%" }}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    InputProps={{
                      style: {
                        height: 41,
                        fontSize: 14,
                        textAlign: "center",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: 12,
                      },
                    }}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={formValues.address}
                    onChange={handleInputChange}
                    InputProps={{
                      style: {
                        height: 41,
                        fontSize: 14,
                        textAlign: "center",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: 12,
                      },
                    }}
                  />
                </div>

                <div className="templateX p-4 mt-3">
                  <ul className="row templateX-headers">
                    {["upload", "design", "URL"].map((category) => (
                      <Link
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                      >
                        <li
                          className={
                            selectedItem === category ? "active-category" : ""
                          }
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </li>
                      </Link>
                    ))}
                  </ul>

                  <div className="row templateX-banners my-3">
                    {selectedItem === "upload" && (
                      <ImgCrop rotationSlider>
                        <Upload
                          listType="picture-card"
                          fileList={fileList}
                          onChange={onChange}
                          maxCount={1}
                          beforeUpload={(file) => {
                            const imageURL = URL.createObjectURL(file);
                            setUploadedImageUrl(imageURL);
                            setFileList([file]);
                            return false;
                          }}
                        >
                          {fileList.length < 1 && "+ Upload"}
                        </Upload>
                      </ImgCrop>
                    )}
                    {selectedItem === "design" && (
                      <div className="design-container flex-container flex-column">
                        <div className="font">
                          <Select
                            style={{ width: "100%" }}
                            value={formValues.font}
                            onChange={(e) =>
                              handleInputChange({
                                target: { name: "font", value: e.target.value },
                              })
                            }
                            variant="outlined"
                            displayEmpty
                            fullWidth
                          >
                            {fonts.map((font) => (
                              <MenuItem value={font} key={font}>
                                {font}
                              </MenuItem>
                            ))}
                          </Select>
                        </div>

                        <div className="font-color flex-container flex-column">
                          <span>Font Color</span>

                          <div className="colors-pallete flex-container">
                            {colors.map((colorObj, index) => (
                              <button
                                className="color"
                                key={index}
                                style={{
                                  backgroundColor: `#${colorObj.color}`,
                                }}
                                onClick={() =>
                                  handleColorItemClick(
                                    `#${colorObj.color}`,
                                    "font"
                                  )
                                }
                              ></button>
                            ))}
                          </div>
                        </div>

                        <div className="background-color flex-container flex-column">
                          <span>Background Color</span>

                          <div className="colors-pallete flex-container">
                            {colors.map((colorObj, index) => (
                              <button
                                className="color"
                                key={index}
                                style={{
                                  backgroundColor: `#${colorObj.color}`,
                                }}
                                onClick={() =>
                                  handleColorItemClick(
                                    `#${colorObj.color}`,
                                    "background"
                                  )
                                }
                              ></button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedItem === "URL" && (
                      <div className="url-container">
                        <div className="url-sosial">
                          <input
                            type="text"
                            className="font-size-14 font-weight-400 btn-background p-3"
                            placeholder="Facebook URL"
                            value={socialUrl.facebook}
                            onChange={(e) =>
                              setSocialUrl((prev) => ({
                                ...prev,
                                facebook: e.target.value,
                              }))
                            }
                          />

                          <input
                            type="text"
                            className="font-size-14 font-weight-400 btn-background p-3"
                            placeholder="LinkedIn URL"
                            value={socialUrl.linkedln}
                            onChange={(e) =>
                              setSocialUrl((prev) => ({
                                ...prev,
                                linkedln: e.target.value,
                              }))
                            }
                          />

                          <input
                            type="text"
                            className="font-size-14 font-weight-400 btn-background p-3"
                            placeholder="QR code URL"
                            value={socialUrl.qrCode}
                            onChange={(e) =>
                              setSocialUrl((prev) => ({
                                ...prev,
                                qrCode: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 pl-2 flex-container flex-column">
              <div className="generator_banner_right">
                <h5 className="text-inky font-size-28 font-weight-700">
                  Kind Regards
                </h5>

                <div
                  className="right-regard row"
                  style={{ backgroundColor: formValues.backgroundColor }}
                >
                  <div className="col-12 col-md-3 right-regard-img">
                    <img
                      src={
                        uploadedImageUrl || "https://via.placeholder.com/140"
                      }
                      alt="Uploaded"
                      style={{
                        width: "142px",
                        height: "142px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="col-12 col-md-6 right-regard-container">
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
                    </div>
                  </div>

                  <div className="col-12 col-md-3 right-regard-qr px-2">
                    <QRCode
                      value={socialUrl.qrCode || " "}
                      style={{ height: "107px", width: "107px" }}
                      {...getQRCodeColors()}
                    />
                    <div className="sosial-icons">
                      <Link to={socialUrl.facebook}>
                        <FaFacebookSquare style={{ color: setIconColor() }} />
                      </Link>
                      <Link to={socialUrl.linkedln}>
                        <FaLinkedin style={{ color: setIconColor() }} />
                      </Link>
                    </div>
                  </div>
                </div>

                <h4 className="text-text font-size-16 font-weight-500 pt-3">
                  Create your Website{" "}
                  <Link to="#" className="text-danger">
                    email signature
                  </Link>
                </h4>
              </div>
              <button
                className="btn_email bg-secondary p-2 mt-4 font-size-24 text-natural font-weight-500"
                onClick={() => alert("Integrate to your email")}
              >
                Integrate to your email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSign;

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button, Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { LuMail, LuPhone } from "react-icons/lu";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import PageHeader from "../../../../components/common/PageHeader";
import "./_style.scss";
import popup from "./popup.png";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [selectedItem, setSelectedItem] = useState("upload");

  const [fileList, setFileList] = useState([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      fullName: "",
      company: "",
      position: "",
      phone: "",
      email: "",
      address: "",
      font: "Montserrat",
      fontColor: "#000000",
      backgroundColor: "#ffffff",
    },
  });

  const formValues = watch();

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

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneChange = (phone) => {
    setValue("phone", phone);
  };

  const handleFontChange = (e) => {
    setValue("font", e.target.value);
  };

  const handleColorItemClick = (color, type) => {
    setValue(type === "font" ? "fontColor" : "backgroundColor", color);
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    const currentImageUrls = newFileList.map(
      (file) => file.url || URL.createObjectURL(file.originFileObj)
    );

    if (uploadedImageUrl && !currentImageUrls.includes(uploadedImageUrl)) {
      if (currentImageUrls.length > 0) {
        setUploadedImageUrl(currentImageUrls[0]);
      } else {
        setUploadedImageUrl(null);
      }
    }

    if (!uploadedImageUrl && newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setUploadedImageUrl(imageURL);
      }
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useEffect(() => {
    const handleImageClick = (event) => {
      const container = event.target.closest(".ant-upload-list-item-container");
      if (container) {
        const img = container.querySelector("img");
        if (img) {
          setUploadedImageUrl(img.src);
        }
      }
    };

    document.addEventListener("click", handleImageClick);

    return () => {
      document.removeEventListener("click", handleImageClick);
    };
  }, [fileList, uploadedImageUrl]);

  const [socialUrl, setSocialUrl] = useState({
    instagram: "",
    facebook: "",
    linkedln: "",
    qrCode: "",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <section className="signature-generator">
      <div className="container">
        <PageHeader header="Free online Email Signature Generator" />
        <p className="font-size-20 font-weight-400 py-3 text-align-center">
          Measure, track and maximize your Email signature
        </p>

        <div className="generator">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="generator_banner row gap-4 mt-3" style={{flexWrap: "nowrap"}}>
              <div className="col-12 col-lg-6">
                <div className="generator_banner_left">
                  <div className="form-group text p-4">
                    <input
                      className="form-control"
                      placeholder="Full Name"
                      {...register("fullName")}
                    />
                    <input
                      className="form-control"
                      placeholder="Company"
                      {...register("company")}
                    />
                    <input
                      className="form-control"
                      placeholder="Position"
                      {...register("position")}
                    />
                    <PhoneInput
                      country={"us"}
                      value={formValues.phone}
                      onChange={handlePhoneChange}
                      inputStyle={{ width: "100%" }}
                    />
                    <input
                      className="form-control"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <input
                      className="form-control"
                      placeholder="Address"
                      {...register("address")}
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
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </li>
                        </Link>
                      ))}
                    </ul>

                    <div className="row templateX-banners my-3">
                      {selectedItem === "upload" && (
                        <div className="upload-container">
                          <div className="uploader">
                            <Upload
                              listType="picture-card"
                              fileList={fileList}
                              onPreview={onPreview}
                              onChange={onChange}
                              beforeUpload={() => false}
                              action={null}
                              maxCount={1}
                              showUploadList={{
                                showRemoveIcon: fileList.length > 0,
                              }}
                              className=""
                            >
                              {fileList.length < 2 && (
                                <div className="upload-button">
                                  <IoIosAddCircle />
                                  <p>Format .png .jpg</p>
                                  <p>Size (Px): 800 x 300</p>
                                </div>
                              )}
                            </Upload>
                          </div>
                        </div>
                      )}
                      {selectedItem === "design" && (
                        <div className="design-container flex-container flex-column">
                          <div className="font">
                            <Select
                              style={{ width: "100%" }}
                              value={formValues.font}
                              onChange={handleFontChange}
                              displayEmpty
                              fullWidth
                              {...register("font")}
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

              <div className="col-12 col-lg-6 flex-container flex-column">
                <div className="generator_banner_right">
                  <div className="generator-header">
                    <div className="message">
                      <div className="container">
                        <span>New Messages</span>
                      </div>
                    </div>
                    <div className="container">
                      <div className="mail-forms">
                        <span>To</span>
                      </div>
                    </div>
                    <div className="container">
                      <div className="mail-forms">
                        <span>Subject</span>
                      </div>
                    </div>
                  </div>

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
                      </div>
                    </div>

                    <div className="col-md-3 right-regard-qr px-2">
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
                </div>

                <Button
                  type="primary"
                  onClick={showModal}
                  className="btn_email bg-secondary p-5 mt-4 font-size-24 text-natural font-weight-500"
                >
                  Integrate to your email
                </Button>
              </div>
            </div>
            <Modal
              open={isModalOpen}
              onClose={handleCloseModal}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="sign-up-modal"
              footer={null}
              BackdropProps={{
                onClick: handleCloseModal,
              }}
            >
              <div className="modal-content">
                <div className="modal_head">
                  <button
                    type="button"
                    aria-label="Close"
                    className="ant-modal-close"
                    onClick={handleCloseModal}
                  ></button>
                  <div className="row">
                    <div className="col-12 col-lg-6 modal_left py-4 px-8">
                      <div className="modal_left-header">
                        <h3>Your Email signature is just a click away!</h3>
                        <p>
                          Sign up in just 30 seconds to set up and begin using
                          your email signature free for 7 days.
                        </p>
                      </div>

                      <form className="form-group">
                        <div className="form-group-input">
                          <label className="font-size-18 text-text10 font-weight-500">
                            E-mail address
                          </label>
                          <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            type="email"
                            name="email"
                            fullWidth
                          />
                        </div>
                        <div className="form-group-input">
                          <label className="font-size-18 text-text10 font-weight-500 ">
                            Password
                          </label>
                          <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            fullWidth
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="sign-up-buttons">
                          <Link to="#">
                            <button
                              type="submit"
                              className="btn btn-primary text-natural"
                            >
                              Free sign up
                            </button>
                          </Link>
                          <Link to="#">
                            <button className="google btn-google">
                              <img
                                src="https://t4.ftcdn.net/jpg/03/08/54/37/360_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg"
                                alt="google sign up"
                              />
                              Continue with Google
                            </button>
                          </Link>
                        </div>
                      </form>

                      <div className="modal_left-footer">
                        <div className="login">
                          <span>Already have an account? - </span>
                          <Link to="/login">Login</Link>
                        </div>
                        <div className="free-trial">
                          <div className="privacy-policy">
                            <p>
                              By signing up, you agree to the
                              <Link to="/"> Terms And Condition</Link>
                            </p>
                            <p>
                              and
                              <Link to="/"> Privacy Policy</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6 modal_right d-none">
                      <div className="modal_right_img">
                        <img src={popup} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSign;

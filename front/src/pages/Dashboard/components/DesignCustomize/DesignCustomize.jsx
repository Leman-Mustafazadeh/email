import { Checkbox, ColorPicker, Modal, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { LuMail, LuPhone } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import banner2 from "../../../../assets/images/templates/Frame-2095584531.png";
import banner1 from "../../../../assets/images/templates/Frame-2095584541.png";
import { colors, fonts } from "../instance";

export const DesignCustomize = ({
  handleSubmit,
  setValue,
  register,
  watch,
  setProfileImageUrl,
  profileImageUrl,
  setIconColor,
  getQRCodeColors,
}) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const formValues = watch();

  // ==== modal popup ====
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // === Image Upload logic ===
  const [profileFileList, setProfileFileList] = useState([]);

  const handleProfileChange = ({ fileList: newFileList }) => {
    setProfileFileList(newFileList);

    const currentImageUrls = newFileList.map(
      (file) => file.url || URL.createObjectURL(file.originFileObj)
    );

    if (profileImageUrl && !currentImageUrls.includes(profileImageUrl)) {
      if (currentImageUrls.length > 0) {
        setProfileImageUrl(currentImageUrls[0]);
      } else {
        setProfileImageUrl(null);
      }
    }

    if (!profileImageUrl && newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setProfileImageUrl(imageURL);
      }
    }
  };

  // === Baneer Upload logic ===

  const [bannerFileList, setBannerFileList] = useState([]);
  const [bannerImageUrl, setBannerImageUrl] = useState(banner1);

  useEffect(() => {
    setBannerImageUrl(banner1);
  }, []);

  const handleBannerClick = (banner) => {
    setBannerImageUrl(banner);
  };

  const handleBannerChange = async ({ fileList: newFileList }) => {
    setBannerFileList(newFileList);

    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;

      const croppedImage = await getCroppedImage(file);
      const imageURL = URL.createObjectURL(croppedImage);

      setBannerImageUrl(imageURL);
    } else {
      setBannerImageUrl(null);
    }
  };

  const getCroppedImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 411;
          canvas.height = 96;
          ctx.drawImage(img, 0, 0, 411, 96);

          canvas.toBlob((blob) => {
            const croppedFile = new File([blob], file.name, {
              type: file.type,
            });
            resolve(croppedFile);
          }, file.type);
        };
      };
      reader.readAsDataURL(file);
    });
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
    imgWindow.document.write(image.outerHTML);
  };

  const handlePhoneChange = (phone) => {
    setValue("phone", phone);
  };

  // ==== font customize ====
  const [fontModalOpen, setFontModalOpen] = useState(false);
  const showFontModal = () => {
    setFontModalOpen(true);
  };
  const handleFontOk = () => {
    setFontModalOpen(false);
  };
  const handleFontCancel = () => {
    setFontModalOpen(false);
  };

  const handleFontCase = (elem) => {
    setValue("fontCase", elem);
  };

  // ==== color customize ====
  const [colorModalOpen, setColorModalOpen] = useState(false);
  const showColorModal = () => {
    setColorModalOpen(true);
  };
  const handleColorModalOk = () => {
    setColorModalOpen(false);
  };

  const handleColorMOdalCancel = () => {
    setColorModalOpen(false);
  };

  return (
    <div className="flex-container gap-5">
      <div className="dashboard">
        <div className="titles p-5">
          <div className="title">
            <h3>Titles</h3>
            <button onClick={showModal}>
              <RiSettingsLine />
              <span>Customize</span>
            </button>
            <Modal
              title={
                <div className="text-align-center">
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#3C3C3C",
                      fontWeight: "700",
                    }}
                  >
                    Customize Title
                  </span>
                </div>
              }
              style={{
                maxWidth: "658px",
              }}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Apply"
              okButtonProps={{
                className: "btn bg-primary text-natural p-5",
              }}
              cancelButtonProps={{
                style: { display: "none" },
              }}
              closeIcon={
                <span
                  style={{
                    backgroundColor: "#0A2E5D",
                    color: "#fff",
                    padding: "0px 25px",
                    borderRadius: "33px",
                    transform: "translateX(-30px)",
                    fontSize: "22px",
                  }}
                >
                  &#10005;
                </span>
              }
            >
              <div className="container flex-container flex-column gap-7">
                <div className="font-customize flex-container flex-column gap-2">
                  <h4>Font size</h4>
                  <div className="customize-container row flex-align-center gap-5">
                    <div
                      className="col-3 font-controller"
                      style={{
                        fontFamily: formValues.font,
                        textTransform: formValues.fontCase,
                      }}
                    >
                      Aa
                    </div>
                    <div className="col-6 font">
                      <span
                        onClick={showFontModal}
                        style={{
                          cursor: "pointer",
                          fontFamily: formValues.font,
                          fontSize: "18px",
                        }}
                      >
                        {formValues.font}
                      </span>
                      <Modal
                        open={fontModalOpen}
                        title={
                          <div className="text-align-center">
                            <span
                              style={{
                                fontSize: "20px",
                                color: "#3C3C3C",
                                fontWeight: "700",
                              }}
                            >
                              Select a Font
                            </span>
                          </div>
                        }
                        style={{
                          maxWidth: "658px",
                        }}
                        onOk={handleFontOk}
                        onCancel={handleFontCancel}
                        okText="Apply"
                        okButtonProps={{
                          className: "btn bg-primary text-natural p-5",
                        }}
                        cancelButtonProps={{
                          style: { display: "none" },
                        }}
                        closeIcon={
                          <span
                            style={{
                              backgroundColor: "#0A2E5D",
                              color: "#fff",
                              padding: "0px 25px",
                              borderRadius: "33px",
                              transform: "translateX(-30px)",
                              fontSize: "22px",
                            }}
                          >
                            &#10005;
                          </span>
                        }
                      >
                        <div className="flex-container flex-column gap-2">
                          {fonts.map((font, index) => (
                            <div
                              className="customize-container"
                              key={index}
                              onClick={() => setValue("font", font)}
                              style={{
                                backgroundColor:
                                  formValues.font === font
                                    ? "#DAE7FB"
                                    : "transparent",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: font,
                                  fontSize: "20px",
                                  userSelect: "none",
                                }}
                              >
                                {font}
                              </span>
                            </div>
                          ))}
                        </div>
                      </Modal>
                    </div>
                    <Checkbox
                      onClick={() =>
                        setValue(
                          "fontWeight",
                          formValues.fontWeight === "700" ? "500" : "700"
                        )
                      }
                      className="font-weight-chechbox"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontWeight: "700" }}>Bold</span>
                    </Checkbox>
                  </div>
                </div>
                <div className="text-customize row gap-10">
                  <div className="flex-container flex-column gap-2">
                    <h4>Color</h4>
                    <div className="customize-box">
                      <button
                        className="color-picker"
                        style={{ backgroundColor: formValues.fontColor }}
                        onClick={showColorModal}
                      >
                        <MdDone />
                      </button>
                      <Modal
                        title={
                          <div className="text-align-center">
                            <span
                              style={{
                                fontSize: "20px",
                                color: "#3C3C3C",
                                fontWeight: "700",
                              }}
                            >
                              Define color
                            </span>
                          </div>
                        }
                        style={{
                          maxWidth: "658px",
                        }}
                        open={colorModalOpen}
                        onOk={handleColorModalOk}
                        onCancel={handleColorMOdalCancel}
                        okText="Apply"
                        okButtonProps={{
                          className: "btn bg-primary text-natural p-5",
                        }}
                        cancelButtonProps={{
                          style: { display: "none" },
                        }}
                        closeIcon={
                          <span
                            style={{
                              backgroundColor: "#0A2E5D",
                              color: "#fff",
                              padding: "0px 25px",
                              borderRadius: "33px",
                              transform: "translateX(-30px)",
                              fontSize: "22px",
                            }}
                          >
                            &#10005;
                          </span>
                        }
                      >
                        <div className="color-customize container flex-container flex-column gap-2 py-10">
                          <h4>Color</h4>
                          <div className="row flex-justify-space-between">
                            <div className="col-4">
                              <div className="customize-box">
                                <button
                                  className="color-picker"
                                  style={{
                                    backgroundColor: formValues.fontColor,
                                    height: "65px",
                                  }}
                                >
                                  <MdDone />
                                </button>
                              </div>
                            </div>
                            <div className="col-7">
                              <div className="colors-pallete row">
                                <ColorPicker
                                  onChange={(color) => {
                                    const colorValue = color.hex
                                      ? color.hex
                                      : color.toHexString();
                                    setValue("fontColor", colorValue);
                                  }}
                                />
                                {colors.map((colorObj, index) => (
                                  <button
                                    className="color"
                                    key={index}
                                    style={{
                                      backgroundColor: `#${colorObj.color}`,
                                    }}
                                    onClick={() =>
                                      setValue(
                                        "fontColor",
                                        `#${colorObj.color}`
                                      )
                                    }
                                    aria-label={`Color ${colorObj.color}`}
                                    title={`Select color #${colorObj.color}`}
                                  ></button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  </div>
                  <div className="flex-container flex-column gap-2">
                    <h4>Case</h4>
                    <div className="customize-box flex-container gap-2">
                      <div
                        className={`font-case ${
                          formValues.fontCase === "capitalize"
                            ? "selected"
                            : null
                        }`}
                        onClick={() => handleFontCase("capitalize")}
                      >
                        Aa
                      </div>
                      <div
                        className={`font-case ${
                          formValues.fontCase === "uppercase"
                            ? "selected"
                            : null
                        }`}
                        onClick={() => handleFontCase("uppercase")}
                      >
                        A
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row gap-5">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Full Name"
                    {...register("fullName")}
                    maxLength={20}
                  />
                  <input
                    className="form-control"
                    placeholder="Position"
                    {...register("position")}
                    maxLength={20}
                  />
                  <input
                    className="form-control"
                    placeholder="Email"
                    {...register("email")}
                    maxLength={30}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Company"
                    {...register("company")}
                    maxLength={40}
                  />
                  <PhoneInput
                    country={"us"}
                    value={formValues.phone}
                    onChange={handlePhoneChange}
                    inputStyle={{ width: "100%" }}
                  />
                  <input
                    className="form-control"
                    placeholder="Address"
                    {...register("address")}
                    maxLength={30}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="links p-5">
          <div className="title">
            <h3>Links</h3>
          </div>
          <form className="url-container">
            <div className="url-sosial form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Instagram URL"
                value={formValues.instagramUrl}
                onChange={(e) => setValue("instagramUrl", e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Facebook URL"
                value={formValues.facebookUrl}
                onChange={(e) => setValue("facebookUrl", e.target.value)}
              />

              <input
                type="text"
                className="form-control"
                placeholder="LinkedIn URL"
                value={formValues.linkedinUrl}
                onChange={(e) => setValue("linkedinUrl", e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="qr p-5">
          <div className="title">
            <h3>QR code links </h3>
          </div>
          <form className="url-container">
            <div className="url-sosial form-group">
              <input
                type="text"
                className="form-control"
                placeholder="QR code Links"
                value={formValues.qrCoreBase64}
                onChange={(e) => setValue("qrCoreBase64", e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="photo row p-5">
          <div className="upload-container">
            <div className="title">
              <h3> Profile Image or Logo </h3>
            </div>
            <div className="uploader">
              <Upload
                listType="picture-card"
                fileList={profileFileList}
                onPreview={onPreview}
                onChange={handleProfileChange}
                beforeUpload={() => false}
                action={null}
                maxCount={1}
                showUploadList={{
                  showRemoveIcon: profileFileList.length > 0,
                }}
              >
                {profileFileList.length < 2 && (
                  <div className="upload-button">
                    <IoIosAddCircle />
                    <p>Format .png .jpg</p>
                    <p>Size (Px): 800 x 300</p>
                  </div>
                )}
              </Upload>
            </div>
          </div>
        </div>
        <div className="banner-upload p-5">
          <div className="title">
            <h3>Banner Image</h3>
            <button>
              <RiSettingsLine />
              <span>Customize</span>
            </button>
          </div>
          <form className="url-container mb-5">
            <div className="url-sosial form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Banner links"
                value={formValues.banner}
                onChange={(e) => {
                  const inputValue = e.target.value.trim();
                  if (inputValue && !inputValue.startsWith("https://")) {
                    setValue("banner", `https://${inputValue}`);
                  } else {
                    setValue("banner", inputValue);
                  }
                }}
              />
            </div>
          </form>
          <div className="row">
            <div className="upload-container">
              <div className="uploader">
                <ImgCrop
                  aspect={411 / 96}
                  modalProps={{
                    okText: "Apply",
                    okButtonProps: {
                      className: "btn bg-primary text-natural p-5",
                    },
                    cancelButtonProps: {
                      style: { display: "none" },
                    },
                    closeIcon: (
                      <span
                        style={{
                          backgroundColor: "#0A2E5D",
                          color: "#fff",
                          padding: "0px 25px",
                          borderRadius: "33px",
                          transform: "translateX(-30px)",
                          fontSize: "22px",
                        }}
                      >
                        &#10005;{" "}
                      </span>
                    ),
                  }}
                >
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={bannerFileList}
                    onChange={handleBannerChange}
                    onPreview={onPreview}
                    beforeUpload={() => true}
                    maxCount={1}
                    showUploadList={{
                      showRemoveIcon: bannerFileList.length > 0,
                    }}
                  >
                    {bannerFileList.length < 2 && (
                      <div className="upload-button">
                        <IoIosAddCircle />
                        <p>Format .png .jpg</p>
                        <p>Size (Px): 411 x 96</p>
                      </div>
                    )}
                  </Upload>
                </ImgCrop>
              </div>
            </div>
          </div>
          <div className="banner-templates mt-8">
            <h4>Banner templates</h4>
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={banner1}
                  alt="Banner"
                  onClick={() => handleBannerClick(banner1)}
                />
              </div>
              <div className="col-12 col-md-6">
                <img
                  src={banner2}
                  alt="Banner"
                  onClick={() => handleBannerClick(banner2)}
                />
              </div>
              <div className="col-12 col-md-6">
                <img
                  src={banner2}
                  alt="Banner"
                  onClick={() => handleBannerClick(banner2)}
                />
              </div>
              <div className="col-12 col-md-6">
                <img
                  src={banner1}
                  alt="Banner"
                  onClick={() => handleBannerClick(banner1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="generator_banner_right">
          <div className="generator-header">
            <div className="message px-5">
              <span>New Messages</span>
            </div>
            <div className="px-5">
              <div className="mail-forms">
                <span>To</span>
              </div>
              <div className="mail-forms">
                <span>Subject</span>
              </div>
            </div>
          </div>

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
                    fontWeight: formValues.fontWeight,
                    textTransform: formValues.fontCase,
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
                      fontWeight: formValues.fontWeight,
                      textTransform: formValues.fontCase,
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
                      fontWeight: formValues.fontWeight,
                      textTransform: formValues.fontCase,
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
                      fontWeight: formValues.fontWeight,
                      textTransform: formValues.fontCase,
                    }}
                  >
                    {formValues.phone || "Your Phone"}
                  </p>
                </div>
                <div className="sosial-icons">
                  <Link
                    to={formValues.instagramUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        formValues.instagramUrl,
                        "_blank",
                        "noopener noreferrer"
                      );
                    }}
                  >
                    <FaInstagram style={{ color: setIconColor() }} />
                  </Link>
                  <Link
                    to={formValues.facebookUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        formValues.facebookUrl,
                        "_blank",
                        "noopener noreferrer"
                      );
                    }}
                  >
                    <FaFacebookSquare style={{ color: setIconColor() }} />
                  </Link>
                  <Link
                    to={formValues.linkedinUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        formValues.linkedinUrl,
                        "_blank",
                        "noopener noreferrer"
                      );
                    }}
                  >
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
            <Link
              to={formValues.banner}
              onClick={(e) => {
                e.preventDefault();
                window.open(formValues.banner, "_blank", "noopener noreferrer");
              }}
            >
              <img
                src={bannerImageUrl || "https://via.placeholder.com/411x96"}
                alt="Uploaded"
                style={{
                  height: "96px",
                  objectFit: "cover",
                }}
              />
            </Link>
          </div>
        </div>

        <Link to="/">
          <button className="btn bg-primary text-natural my-5">
            Integrate now
          </button>
        </Link>
        <Link to="/">
          <button className="btn border-primary">Save and draft</button>
        </Link>
      </div>
    </div>
  );
};

DesignCustomize.propTypes = {
  handleSubmit: PropTypes.func,
  setValue: PropTypes.func,
  register: PropTypes.func,
  watch: PropTypes.func,
  setProfileImageUrl: PropTypes.func,
  profileImageUrl: PropTypes.string,
  setIconColor: PropTypes.func,
  getQRCodeColors: PropTypes.func,
};

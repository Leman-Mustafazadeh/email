import { Autocomplete, TextField } from "@mui/material";
import { Upload } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import { RiSettingsLine } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import banner2 from "../../../assets/images/templates/Frame-2095584531.png";
import banner4 from "../../../assets/images/templates/Frame-2095584539.png";
import banner3 from "../../../assets/images/templates/Frame-2095584540.png";
import banner1 from "../../../assets/images/templates/Frame-2095584541.png";
import {
  ContactUs,
  Customize,
  Question,
  Signature,
  Team,
  Template,
} from "../../../utils/icons";
import { Icon } from "../../../utils/icons/icons";
import DashboardNavBar from "../components/DashboardNavBar/DashboardNavBar";
import "./_style.scss";

function DashboardDesign() {
  const [profileFileList, setProfileFileList] = useState([]);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [bannerFileList, setBannerFileList] = useState([]);
  const [bannerImageUrl, setBannerImageUrl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState("signature");

  // ==== Fix utils on scroll ====
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==== Key Codes ====

  // ==== Form values ====
  const [socialUrl, setSocialUrl] = useState({
    instagram: "",
    facebook: "",
    linkedln: "",
    qrCode: "",
    banner: "",
  });

  const { register, control, handleSubmit, setValue, getValues, watch } =
    useForm({
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
        emails: [],
        searchText: "",
      },
    });

  const formValues = watch();

  const [tags, setTags] = useState(formValues.emails);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const handlePhoneChange = (phone) => {
    setValue("phone", phone);
  };

  // ==== Members section add user logic ====

  const handleAddTag = () => {
    const currentEmails = getValues("emails");
    const newEmail = getValues("searchText").trim();

    if (newEmail && !currentEmails.includes(newEmail)) {
      const updatedEmails = [...currentEmails, newEmail];
      setTags(updatedEmails);
      setValue("emails", updatedEmails);
      setValue("searchText", "");
    }
  };

  const handleDeleteEmail = (emailDelete) => {
    const updatedEmails = getValues("emails").filter(
      (email) => email !== emailDelete
    );
    setTags(updatedEmails);
    setValue("emails", updatedEmails);
  };

  const handleKeyDown = (event) => {
    if (event.key === " " || event.key === "," || event.key === "Enter") {
      event.preventDefault();
      handleAddTag();
    }
  };

  const handleAddUserToTable = () => {
    const currentEmails = getValues("emails");
    if (currentEmails.length > 0) {
      console.log("Adding to table:", currentEmails);
      setValue("emails", []);
      setTags([]);
    }
  };

  // ==== Image Upload logic ====
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

  const handleBannerChange = ({ fileList: newFileList }) => {
    setBannerFileList(newFileList);

    const currentBannerUrls = newFileList.map(
      (file) => file.url || URL.createObjectURL(file.originFileObj)
    );

    if (bannerImageUrl && !currentBannerUrls.includes(bannerImageUrl)) {
      if (currentBannerUrls.length > 0) {
        setBannerImageUrl(currentBannerUrls[0]);
      } else {
        setBannerImageUrl(null);
      }
    }

    if (!bannerImageUrl && newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setBannerImageUrl(imageURL);
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

  // ==== generator banner logic ====
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

  // ==== select ulitls category ====
  const handleCategoryClick = (category) => {
    setSelectedItem(category);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "signature":
        return (
          <>
            <div className="dashboard">
              <div className="titles p-5">
                <div className="title">
                  <h3>Titles</h3>
                  <button>
                    <RiSettingsLine />
                    <span>Customize</span>
                  </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row gap-5" style={{ flexWrap: "nowrap" }}>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Full Name"
                          {...register("fullName")}
                        />
                        <input
                          className="form-control"
                          placeholder="Position"
                          {...register("position")}
                        />
                        <input
                          className="form-control"
                          placeholder="Email"
                          {...register("email")}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Company"
                          {...register("company")}
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
                      value={socialUrl.qrCode}
                      onChange={(e) =>
                        setSocialUrl((prev) => ({
                          ...prev,
                          qrCode: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="text"
                      className="form-control"
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
                      className="form-control"
                      placeholder="LinkedIn URL"
                      value={socialUrl.linkedln}
                      onChange={(e) =>
                        setSocialUrl((prev) => ({
                          ...prev,
                          linkedln: e.target.value,
                        }))
                      }
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
                      value={socialUrl.qrCode}
                      onChange={(e) =>
                        setSocialUrl((prev) => ({
                          ...prev,
                          qrCode: e.target.value,
                        }))
                      }
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
                      className=""
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
                      value={socialUrl.banner}
                      onChange={(e) =>
                        setSocialUrl((prev) => ({
                          ...prev,
                          banner: e.target.value,
                        }))
                      }
                    />
                  </div>
                </form>
                <div className="row">
                  <div className="upload-container">
                    <div className="uploader">
                      <Upload
                        listType="picture-card"
                        fileList={bannerFileList}
                        onPreview={onPreview}
                        onChange={handleBannerChange}
                        beforeUpload={() => false}
                        action={null}
                        maxCount={1}
                        showUploadList={{
                          showRemoveIcon: bannerFileList.length > 0,
                        }}
                        className=""
                      >
                        {bannerFileList.length < 2 && (
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
                <div className="banner-templates mt-8">
                  <h4>Banner templates</h4>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <img src={banner1} alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                      <img src={banner2} alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                      <img src={banner3} alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                      <img src={banner4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner">
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
                        <Link to={socialUrl.instagram}>
                          <FaInstagram style={{ color: setIconColor() }} />
                        </Link>
                        <Link to={socialUrl.facebook}>
                          <FaFacebookSquare style={{ color: setIconColor() }} />
                        </Link>
                        <Link to={socialUrl.linkedln}>
                          <FaLinkedin style={{ color: setIconColor() }} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 right-regard-qr px-2">
                    <QRCode
                      value={socialUrl.qrCode || " "}
                      style={{ height: "107px", width: "107px" }}
                      {...getQRCodeColors()}
                    />
                  </div>
                </div>

                <div className="banner-img px-3 pb-2">
                  <img src={banner1} alt="" />
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
          </>
        );
      case "template":
        return <div>Template Content</div>;
      case "design":
        return <div>Design Content</div>;
      case "member":
        return (
          <div className="members p-5 flex-container flex-column gap-6">
            <div className="members-header">
              <p>
                The maximum number of team members you can invite is 5, and each
                user can be assigned a specific level of access. Only the <br />
                account admin can edit plans, view billing details, and delete
                accounts.
              </p>
            </div>

            <div className="members-user-count flex-container gap-2">
              <p>User limit:</p> <span>1/10</span>
            </div>

            <div className="members-user-add">
              <form className="form-group">
                <p>Add new user</p>
                <div className=" flex-container gap-4">
                  <Controller
                    name="emails"
                    control={control}
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        multiple
                        freeSolo
                        options={[]}
                        value={tags}
                        onChange={(event, newValue) => {
                          setTags(newValue);
                          setValue("emails", newValue);
                        }}
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <span
                              {...getTagProps({ index })}
                              key={index}
                              className="emails"
                            >
                              <img src="" alt="" />
                              {option}
                              <IoClose />
                            </span>
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            onKeyDown={handleKeyDown}
                            style={{
                              minWidth: "531px",
                              maxWidth: "731px",
                            }}
                          />
                        )}
                      />
                    )}
                  />
                  <Link>
                    <button
                      className="btn bg-primary text-natural"
                      onClick={handleAddUserToTable}
                    >
                      Add user
                    </button>
                  </Link>
                </div>
              </form>
            </div>

            <div className="members-user-list">
              <p>Account users</p>
              <table className="flex-container flex-column gap-3">
                <thead>
                  <tr className="row">
                    <th className="col-8">Email</th>
                    <th className="col-4">Role</th>
                  </tr>
                </thead>
                <tbody className="flex-container flex-column gap-3">
                  {getValues("emails").map((email, index) => (
                    <tr className="row" key={index}>
                      <td className="col-8">
                        <img src="" alt="" />
                        <span>{email}</span>
                      </td>
                      <td className="col-4">
                        <button
                          className="btn bg-primary text-natural"
                          onClick={() => handleDeleteEmail(email)}
                        >
                          Remove user
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      className={`dashboard-design mb-5 ${isScrolled ? "onscroll" : ""}`}
    >
      <DashboardNavBar />
      <div
        className="container row gap-5 relative"
        style={{ flexWrap: "nowrap" }}
      >
        <div className="utils">
          <div className="utils-icons pb-5">
            <div className="avatar">
              <img src="" alt="" />
            </div>
            <div className="utils-icons">
              <Link
                onClick={() => handleCategoryClick("signature")}
                className="icon"
              >
                <Icon icon={Signature} />
                <span>Signature</span>
              </Link>
              <Link
                onClick={() => handleCategoryClick("template")}
                className="icon"
              >
                <Icon icon={Template} />
                <span>Template</span>
              </Link>
              <Link
                onClick={() => handleCategoryClick("design")}
                className="icon"
              >
                <Icon icon={Customize} />
                <span>Design</span>
              </Link>
              <Link
                onClick={() => handleCategoryClick("member")}
                className="icon"
              >
                <Icon icon={Team} />
                <span>Member</span>
              </Link>
            </div>
          </div>
          <div className="utils-icons help pt-5 pb-6">
            <Link onClick={() => handleCategoryClick("")} className="icon">
              <Icon icon={Question} />
              <span>Help center</span>
            </Link>
            <Link onClick={() => handleCategoryClick("")} className="icon">
              <Icon icon={ContactUs} />
              <span>Contact us</span>
            </Link>
          </div>
        </div>
        {renderContent()}
      </div>
    </section>
  );
}

export default DashboardDesign;

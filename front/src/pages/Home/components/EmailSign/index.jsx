import TextField from "@mui/material/TextField";
import "./_style.scss";
import { Link } from "react-router-dom";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";
import PageHeader from "../../../../components/common/PageHeader";

const EmailSign = () => {
  const [selectedItem, setSelectedItem] = useState("upload");
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedItem(category);
  };

  const [fileList, setFileList] = useState([]);

  const [formValues, setFormValues] = useState({
    fullName: "",
    company: "",
    position: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList.length > 0 && newFileList[0].status === "done") {
      setUploadedImageUrl(newFileList[0].url || URL.createObjectURL(newFileList[0].originFileObj));
    } else {
      setUploadedImageUrl(null);
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

  return (
    <section>
      <div className="container">
        <PageHeader header="Free online Email Signature Generator" />
        <p className="font-size-20 font-weight-400 py-4 text-align-center">
          Measure, track and maximize your Email signature
        </p>

        <div className="generator">
          <div className="generator_banner row mt-3">
            <div className="col-12 col-lg-6 px-2">
              <div className="generator_banner_left">
                <div className="btn-store p-3 text">
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                    name="company"
                    value={formValues.company}
                    onChange={handleInputChange}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Position"
                    variant="outlined"
                    name="position"
                    value={formValues.position}
                    onChange={handleInputChange}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={formValues.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="templateX p-5 mt-3">
                  <ul className="row templateX-headers">
                    <Link onClick={() => handleCategoryClick("upload")}>
                      <li
                        className={
                          selectedItem === "upload" ? "active-category" : ""
                        }
                      >
                        Upload
                      </li>
                    </Link>
                    <Link onClick={() => handleCategoryClick("design")}>
                      <li
                        className={
                          selectedItem === "design" ? "active-category" : ""
                        }
                      >
                        Design
                      </li>
                    </Link>
                    <Link onClick={() => handleCategoryClick("url")}>
                      <li
                        className={
                          selectedItem === "url" ? "active-category" : ""
                        }
                      >
                        URL
                      </li>
                    </Link>
                  </ul>
                  <div className="row templateX-banners my-5">
                    {selectedItem === "upload" && (
                      <ImgCrop rotationSlider>
                        <Upload
                          // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                          listType="picture-card"
                          fileList={fileList}
                          onChange={onChange}
                          onPreview={onPreview}
                        >
                          {fileList.length < 5 && "+ Upload"}
                        </Upload>
                      </ImgCrop>
                    )}
                    {selectedItem === "design" && (
                      <div className="design-container">
                        {/* Design-related content goes here */}
                        <p>Design content goes here.</p>
                      </div>
                    )}
                    {selectedItem === "url" && (
                      <div className="url-container">
                        {/* URL-related content goes here */}
                        <p>URL content goes here.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 px-2 flex-container flex-column">
              <div className="generator_banner_right">
                <h5 className="text-inky font-size-28 font-weight-700 ">
                  Kind Regards
                </h5>

                <div className="row mt-4 btn-store">
                  <div className="right-img">
                    <img
                      src={
                        uploadedImageUrl ||
                        "https://via.placeholder.com/150"
                      }
                      alt="Uploaded"
                    />
                  </div>
                  <div className="right-regard">
                    <h2 className="text-light font-weight-700 pb-2">
                      {formValues.fullName || "Your Name"}
                    </h2>
                    <p className="text-light font-weight-600 pb-2">
                      {formValues.position || "Your Position"}
                    </p>
                    <p className="text-light font-weight-500 pb-2">
                      {formValues.phone || "Your Phone"}
                    </p>
                    <p className="text-light font-weight-500 pb-2">
                      {formValues.email || "Your Email"}
                    </p>
                    <p className="text-light font-weight-500 pb-2">
                      {formValues.address || "Your Address"}
                    </p>
                  </div>
                </div>

                <h4 className="text-text font-size-16 font-weight-500 pt-3">
                  Create your WebSite <Link>email signature</Link>
                </h4>
              </div>
              <button className="btn_email bg-secondary p-2 mt-4 font-size-24 text-natural font-weight-500">
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

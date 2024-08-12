import TextField from "@mui/material/TextField";
import "./_style.scss";
import { Link } from "react-router-dom";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import PageHeader from "../../../common/PageHeader";
import { useState } from "react";

const EmailSign = () => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const [activeTab, setActiveTab] = useState("upload");

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
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
        <div className="row flex-column flex-justify-center flex-align-center">
          <PageHeader header="Free online Email Signature Generator" />
          <p className="font-size-20 font-weight-400 py-4 text-align-center">
            Measure, track and maximize your Email signature
          </p>

          <div className="generator">
            <div className="generator_title row mt-3 btn-natural px-1">
              <div className="left col-12 col-lg-6 row flex-column">
                <div className="btn-store p-6 text">
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="FullName"
                    variant="outlined"
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Position"
                    variant="outlined"
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                  />
                </div>

                <div className="templateX p-6 mt-3">
                  <ul className="row btn-store">
                    <li>
                      <a
                        href="#"
                        className={`text-text font-size-16 font-weight-400 ${
                          activeTab === "upload" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("upload")}
                      >
                        Upload
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`text-text font-size-16 font-weight-400 ${
                          activeTab === "design" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("design")}
                      >
                        Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`text-text font-size-16 font-weight-400 ${
                          activeTab === "url" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("url")}
                      >
                        URL
                      </a>
                    </li>
                  </ul>

                  {activeTab === "upload" && (
                    <div>
                      <p className="font-size-16 py-3 font-weight-500 text-text">
                        Profile Image or Logo
                      </p>
                      <ImgCrop rotationSlider>
                        <Upload
                          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                          listType="picture-card"
                          fileList={fileList}
                          onChange={onChange}
                          onPreview={onPreview}
                        >
                          {fileList.length < 5 && "+ Upload"}
                        </Upload>
                      </ImgCrop>
                    </div>
                  )}

                  {activeTab === "design" && (
                    <div>
                      <div style={{ width: "200px" }}>
                        <select>
                          <option value="0">Montesarat</option>
                          <option value="1">Audi</option>
                          <option value="2">kjsn</option>
                          <option value="3">Citroen</option>
                        </select>
                      </div>
                      <p>Font color</p>
                    </div>
                  )}
                  {activeTab === "url" && (
                    <div className="btn-store flex-column py-3 ">
                      <div>
                        <input
                          className="font-size-17 font-weight-400 p-2"
                          type="text"
                          placeholder="Instagram URL"
                        />
                      </div>

                      <div>
                        <input
                          className="font-size-17 font-weight-400 p-2"
                          type="text"
                          placeholder="Facebook URL"
                        />
                      </div>

                      <div>
                        <input
                          className="font-size-17 font-weight-400 p-2"
                          type="text"
                          placeholder="Linkedln URL"
                        />
                      </div>

                      <div>
                        <input
                          className="font-size-17 font-weight-400 p-2"
                          type="text"
                          placeholder="QR code URL"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="right col-12 col-lg-6 px-3">
                <div className="right_item">
                  <h5 className="text-inky font-size-28 font-weight-700">
                    Kind Regards
                  </h5>

                  <div>
                    <div className="row mt-4 btn-store">
                      <div className="right-img">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKE908vQHLqaZ4abiTREZOp57MWMST2-q4w&s"
                          alt=""
                        />
                      </div>
                      <div className="right-regard">
                        <h2 className="text-light font-weight-700 pb-2">
                          Jason Ericon
                        </h2>
                        <p className="text-light font-weight-600 pb-2">
                          Online Marketer
                        </p>
                        <p className="text-light font-weight-500 pb-2">
                          050 492 49 29
                        </p>
                        <p className="text-light font-weight-500 pb-2">
                          laman@gmail.com
                        </p>
                        <p className="text-light font-weight-500 pb-2">
                          Kovkeb Seferliyeva 12
                        </p>
                      </div>
                    </div>

                    <h4 className="text-text font-size-16 font-weight-500 pt-3">
                      Create your WebSite{" "}
                      <a href="#" className="text-danger">
                        <Link>email signature</Link>
                      </a>
                    </h4>
                  </div>
                </div>
                <button className="btn_email bg-secondary p-2 mt-4 font-size-24 text-natural font-weight-500">
                  Integrate to your email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSign;

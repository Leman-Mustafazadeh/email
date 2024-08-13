import TextField from "@mui/material/TextField";
import "./_style.scss";
import { Link } from "react-router-dom";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";
import PageHeader from "../../../../components/common/PageHeader";

const EmailSign = () => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
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
        <PageHeader header="Free online Email Signature Generator" />
        <p className="font-size-20 font-weight-400 py-4 text-align-center">
          Measure, track and maximize your Email signature
        </p>

        <div className="generator">
          <div className="generator_container row mt-3">
            <div className="left col-12 col-lg-6 px-3">
              <div className="btn-store p-3 text">
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
                  label="Adress"
                  variant="outlined"
                />
              </div>

              <div className="templateX p-5 mt-3 ">
                <ul className="row templateX-headers">
                  <li>Upload</li>
                  <li>Design</li>
                  <li>URL</li>
                </ul>
                <div className="row templateX-banners my-5">
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
              </div>
            </div>

            <div className="right col-12 col-lg-6 px-3">
              <h5 className="text-inky font-size-28 font-weight-700 ">
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

                <h4 className="text-text  font-size-16 font-weight-500 pt-3">
                  Create your WebSite <Link>email signature</Link>
                </h4>
              </div>
              <button className=" btn_email bg-secondary p-2 mt-4 font-size-24 text-natural font-weight-500 ">
                İntegrate to your email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSign;

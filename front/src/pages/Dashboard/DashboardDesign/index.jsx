import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSignatureUpdate } from "../../../service/signature-controller/CreateUpdate/useSignatureUpdate";
import {
  ContactUs,
  Customize,
  Question,
  Signature,
  Team,
  Template,
} from "../../../utils/icons";
import { Icon } from "../../../utils/icons/icons";
import { AddMember } from "../components/AddMember/AddMember";
import DashboardNavBar from "../components/DashboardNavBar/DashboardNavBar";
import { DesignCustomize } from "../components/DesignCustomize/DesignCustomize";
import { SignatureBoard } from "../components/SignatureBoard/SignatureBoard";
import { TemplateBoard } from "../components/TemplateBoard/TemplateBoard";
import "./_style.scss";

function DashboardDesign() {
  // ==== Fix utils on scroll ====
  const [isScrolled, setIsScrolled] = useState(false);

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

  // ==== User Progile Img state
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  // ==== Form Values ====
  const { control, getValues, register, handleSubmit, setValue, watch } =
    useForm({
      defaultValues: {
        fullName: "",
        company: "",
        position: "",
        phone: "",
        email: "",
        address: "",
        instagramUrl: "",
        facebookUrl: "",
        linkedinUrl: "",
        qrCoreBase64: "",
        banner: "",
        font: "Montserrat",
        fontColor: "#3C3C3C",
        fontCase: "capitalize",
        fontWeight: "500",
        backgroundColor: "#fff",
        emails: [],
        searchText: "",
      },
    });

  const formValues = watch();

  // ==== get data from API ====
  const signatureMutation = useSignatureUpdate();

  const fetchSignatureData = async () => {
    const responce = await signatureMutation.mutateAsync();
    return responce;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSignatureData();
        if (data) {
          setValue("fullName", data.fullName || "");
          setValue("company", data.company || "");
          setValue("position", data.position || "");
          setValue("phone", data.phone || "");
          setValue("email", data.email || "");
          setValue("address", data.address || "");
          setValue("instagramUrl", data.instagramUrl || "");
          setValue("facebookUrl", data.facebookUrl || "");
          setValue("linkedinUrl", data.linkedinUrl || "");
          setValue("qrCoreBase64", data.qrCoreBase64 || "");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast.error("Error fetching data in dashboard component");
      }
    };
    getData();
  }, []);

  // ==== customize icons & qr code ====

  const iconColor = "#1251A3";
  const setIconColor = () => {
    if (
      formValues.backgroundColor === "#fff" &&
      formValues.fontColor === "#3C3C3C"
    ) {
      return iconColor;
    }
    return formValues.fontColor;
  };

  const getQRCodeColors = () => {
    const fgColor = !formValues.qrCoreBase64
      ? "#D3D3D3"
      : formValues.backgroundColor === "#000000"
      ? "#ffffff"
      : "#000000";

    return { fgColor, bgColor: formValues.backgroundColor };
  };

  // ====== Render dashboard pages ======
  // ==== select ulitls category ====
  const [selectedItem, setSelectedItem] = useState("design");

  const handleCategoryClick = (category) => {
    setSelectedItem(category);
  };

  const renderComponents = {
    signature: {
      name: "Signature",
      content: (
        <SignatureBoard
          watch={watch}
          profileImageUrl={profileImageUrl}
          setIconColor={setIconColor}
          getQRCodeColors={getQRCodeColors}
        />
      ),
      icon: Signature,
    },
    template: {
      name: "Template",
      content: (
        <TemplateBoard
          watch={watch}
          profileImageUrl={profileImageUrl}
          setIconColor={setIconColor}
          getQRCodeColors={getQRCodeColors}
        />
      ),
      icon: Template,
    },
    design: {
      name: "Design",
      content: (
        <DesignCustomize
          setValue={setValue}
          register={register}
          handleSubmit={handleSubmit}
          watch={watch}
          profileImageUrl={profileImageUrl}
          setProfileImageUrl={setProfileImageUrl}
          setIconColor={setIconColor}
          getQRCodeColors={getQRCodeColors}
        />
      ),
      icon: Customize,
    },
    member: {
      name: "Member",
      content: (
        <AddMember
          control={control}
          getValues={getValues}
          setValue={setValue}
        />
      ),
      icon: Team,
    },
  };

  return (
    <section
      className={`dashboard-design mb-5 ${isScrolled ? "onscroll" : ""}`}
    >
      <DashboardNavBar />
      <div className="container row gap-5 relative">
        <div
          className={`utils ${
            selectedItem === "signature" ? "utils-custom" : ""
          }`}
        >
          <div className="avatar">
            <img src="" alt="" />
            {selectedItem === "signature" && (
              <div className="account">
                <div className="account-info">
                  <h4>My account</h4>
                  <p>{formValues.email}</p>
                </div>
                <FaChevronRight />
              </div>
            )}
          </div>
          <div
            className={`utils-wrapper ${
              selectedItem === "signature" ? "px-5 pt-2" : "pt-2"
            }`}
          >
            <div className="utils-icons pb-5">
              <div className="utils-icons utils-custom-icons">
                {selectedItem === "signature" && <span>Email signatures</span>}
                {Object.keys(renderComponents).map((category) => (
                  <Link
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`icon ${
                      selectedItem === category ? "active" : ""
                    }`}
                  >
                    <Icon icon={renderComponents[category].icon} />
                    <span>{renderComponents[category].name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="utils-icons utils-custom-icons utils-border pt-5 pb-6">
              {selectedItem === "signature" ? <span>Support</span> : null}
              <Link
                onClick={() => handleCategoryClick("help")}
                className="icon"
              >
                <Icon icon={Question} />
                <span>Help center</span>
              </Link>
              <Link
                onClick={() => handleCategoryClick("contact")}
                className="icon"
              >
                <Icon icon={ContactUs} />
                <span>Contact us</span>
              </Link>
            </div>
            {selectedItem === "signature" && (
              <div className="utils-border flex-container flex-justify-center py-5 ">
                <p className="font-size-14 text-text">
                  Free Trial ends in 4 days -{" "}
                  <Link to="/pricing" className="text-primary">
                    Upgrade
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
        <div>{renderComponents[selectedItem]?.content}</div>
      </div>
    </section>
  );
}

export default DashboardDesign;

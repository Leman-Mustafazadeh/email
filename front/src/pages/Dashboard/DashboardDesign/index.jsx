import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSignatureUpdate } from "../../../service/signature-controller/CreateUpdate/useSignatureUpdate";
import { useSignatureStore } from "../../../store/signatureStore";
import { ContactUs, Customize, Signature } from "../../../utils/icons";
import { Icon } from "../../../utils/icons/icons";
import DashboardNavBar from "../components/DashboardNavBar/DashboardNavBar";
import { DesignCustomize } from "../components/DesignCustomize/DesignCustomize";
import { SignatureBoard } from "../components/SignatureBoard/SignatureBoard";
import "./_style.scss";

// import { AddMember } from "../components/AddMember/AddMember";
// import { TemplateBoard } from "../components/TemplateBoard/TemplateBoard";

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

  // ==== Signature Store Integration ====
  const {
    signature,
    addSignature,
    updateFormValue,
    selectedSignatureId,
    setSelectedSignatureId,
    resetSelectedSignature,
  } = useSignatureStore();

  useEffect(() => {
    if (signature?.length === 0) {
      const newId = Date.now().toString();
      addSignature(newId);
      setSelectedSignatureId(newId);
    } else if (signature && signature.length > 0) {
      setSelectedSignatureId(signature[0].id);
    }
  }, [signature, addSignature]);

  const currentSignature = signature?.find(
    (item) => item.id === selectedSignatureId
  );
  const currentFormValues = currentSignature?.formValues || {};

  // ==== Form Setup ====
  const { handleSubmit, register, setValue, watch } = useForm({
    defaultValues: currentFormValues,
  });

  // Update form when selected signature changes
  useEffect(() => {
    if (currentFormValues) {
      Object.entries(currentFormValues).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [selectedSignatureId, setValue, currentFormValues]);

  // ==== submit and reset form ====
  const onSubmit = (data) => {
    updateFormValue(selectedSignatureId, data);
    if (selectedSignatureId) {
      resetSelectedSignature();
    }
  };

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

  // ====== Render dashboard pages ======
  // ==== select ulitls category ====
  const [selectedItem, setSelectedItem] = useState("design");

  const handleCategoryClick = (category) => {
    setSelectedItem(category);
  };

  const renderComponents = {
    signature: {
      name: "Signature",
      content: <SignatureBoard />,
      icon: Signature,
    },
    // template: {
    //   name: "Template",
    //   content: (
    //     <TemplateBoard
    //       watch={watch}
    //       profileImageUrl={profileImageUrl}
    //       setIconColor={setIconColor}
    //       getQRCodeColors={getQRCodeColors}
    //     />
    //   ),
    //   icon: Template,
    // },
    design: {
      name: "Design",
      content: (
        <DesignCustomize
          handleSubmit={handleSubmit}
          setValue={setValue}
          register={register}
          watch={watch}
          signatureId={selectedSignatureId}
          onSave={onSubmit}
        />
      ),
      icon: Customize,
    },
    // member: {
    //   name: "Member",
    //   content: (
    //     <AddMember
    //       control={control}
    //       getValues={getValues}
    //       setValue={setValue}
    //     />
    //   ),
    //   icon: Team,
    // },
  };

  return (
    <section
      className={`dashboard-design mb-5 ${isScrolled ? "onscroll" : ""}`}
    >
      <DashboardNavBar activeComponent={selectedItem} />
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
                  <p>use@gmail.com</p>
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
        {renderComponents[selectedItem]?.content}
      </div>
    </section>
  );
}

export default DashboardDesign;

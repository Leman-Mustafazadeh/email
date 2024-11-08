import { useFormStore } from "../../store/formData";

export const useIconColor = () => {
  const { formValues } = useFormStore();
  const setIconColor = () => {
    const defaulColor = "#1251A3";

    if (
      formValues.backgroundColor === "#fff" &&
      formValues.fontColor === "#3C3C3C"
    ) {
      return defaulColor;
    }
    return formValues.fontColor;
  };
  return setIconColor;
};

export const useQRCodeColors = () => {
  const { formValues } = useFormStore();
  const getQRCodeColors = () => {
    const fgColor = !formValues.qrCoreBase64
      ? "#D3D3D3"
      : formValues.backgroundColor === "#000000"
      ? "#ffffff"
      : "#000000";

    return { fgColor, bgColor: formValues.backgroundColor };
  };
  return getQRCodeColors;
};

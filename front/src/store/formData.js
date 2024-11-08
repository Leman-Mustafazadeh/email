import { create } from "zustand";

export const useFormStore = create((set) => ({
  formValues: {
    header:"",
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
  setFormValues: (values) =>
    set((state) => ({
      formValues: { ...state.formValues, ...values },
    })),
}));

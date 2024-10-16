import { create } from "zustand";

export const useFormStore = create((set) => ({
  formData: {
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
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
}));

import { create } from "zustand";

export const useSignatureStore = create((set) => ({
  signatures: [],
  selectedSignatureId: null,
  addSignature: (id) =>
    set((state) => ({
      signatures: [
        ...state.signatures,
        {
          id,
          formValues: {
            header: "",
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
        },
      ],
      selectedSignatureId: id,
    })),
  deleteSignature: (id) =>
    set((state) => ({
      signatures: state.signatures.filter((signature) => signature.id !== id),
      selectedSignatureId:
        state.selectedSignatureId === id ? null : state.selectedSignatureId,
    })),
  updateFormValue: (id, values) =>
    set((state) => ({
      signatures: state.signatures.map((signature) =>
        signature.id === id
          ? { ...signature, formValues: { ...signature.formValues, ...values } }
          : signature
      ),
      selectedSignatureId: id,
    })),
  setSelectedSignatureId: (id) => set(() => ({ selectedSignatureId: id })),
  resetSelectedSignature: () =>
    set((state) => ({
      signatures: state.signatures.map((signature) =>
        signature.id === state.selectedSignatureId
          ? {
              ...signature,
              formValues: {
                ...signature.formValues,
                header: "",
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
              },
            }
          : signature
      ),
      selectedSignatureId: null,
    })),
}));

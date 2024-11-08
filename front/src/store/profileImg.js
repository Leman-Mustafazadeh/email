import { create } from "zustand";

export const useProfileImgStore = create((set) => ({
  profileImageUrl: null,
  setProfileImageUrl: (url) => set({ profileImageUrl: url }),
}));

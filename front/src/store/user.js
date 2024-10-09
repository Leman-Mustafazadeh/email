import { create } from "zustand";

if (!JSON.parse(localStorage.getItem("user"))) {
  localStorage.setItem("user", JSON.stringify({ id: null, role: "" }));
}

const authInitialState = JSON.parse(localStorage.getItem("user"));

export const useUserStore = create((set) => ({
  id: authInitialState.id,
  role: authInitialState.role,

  login: (user) => {
    set({ id: user.id, role: user.email });
    localStorage.setItem(
      "user",
      JSON.stringify({ id: user.id, role: user.email })
    );
  },

  logout: () => {
    set({ id: null, role: "" });
    localStorage.setItem("user", JSON.stringify({ id: null, role: "" }));
  },
}));

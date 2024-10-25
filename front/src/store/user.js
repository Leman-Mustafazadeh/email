import { create } from "zustand";

if (!localStorage.getItem("user")) {
  localStorage.setItem(
    "user",
    JSON.stringify({ id: null, role: "", token: null })
  );
}

const authInitialState = JSON.parse(localStorage.getItem("user"));

export const useUserStore = create((set) => ({
  id: authInitialState.id,
  role: authInitialState.role,
  token: authInitialState.token,

  login: (user, token) => {
    set({ id: user.id, role: user.email || "", token });
    localStorage.setItem(
      "user",
      JSON.stringify({ id: user.id, role: user.email, token })
    );
  },

  logout: () => {
    set({ id: null, role: "", token: null });
    localStorage.setItem(
      "user",
      JSON.stringify({ id: null, role: "", token: null })
    );
  },
}));

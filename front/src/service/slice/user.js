import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || {
  id: null,
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, role } = action.payload;
      state.id = id;
      state.role = role;
      localStorage.setItem("user", JSON.stringify({ id, role }));
    },
    logout: (state) => {
      state.id = null;
      state.role = "";
      localStorage.setItem("user", JSON.stringify({ id: null, role: "" }));
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

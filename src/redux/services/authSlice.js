import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null, // Tokeni localStorage-dan oxuyur
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Tokeni localStorage-a yazırıq
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token"); // Logout zamanı tokeni silirik
    },
  },
});

export const { setAuthToken, logout } = authSlice.actions;
export default authSlice.reducer;

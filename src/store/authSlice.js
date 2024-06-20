import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthentivation: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentivation = true;
    },
    logout(state) {
      state.isAuthentivation = false;
    },
  },
});
export default authSlice.reducer;
export const authActions = authSlice.actions;

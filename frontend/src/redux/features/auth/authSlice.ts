import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("accessToken") || null, // Initialize token from localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      // Update localStorage when setting the token
      if (action.payload) {
        localStorage.setItem("accessToken", action.payload);
      } else {
        localStorage.removeItem("accessToken");
      }
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("accessToken"); // Remove token from localStorage
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;

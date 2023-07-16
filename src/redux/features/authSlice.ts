import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  email: null,
  token: null,
  user: null,
  isLoading: false, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false; 
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;
      state.token = null;
      state.user = null;
      state.isLoading = false; 
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload; 
    },
  },
});

export const { loginSuccess, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;

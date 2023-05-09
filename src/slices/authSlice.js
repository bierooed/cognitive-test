import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuth: (state, payload) => {
      state.isAuth = payload.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;

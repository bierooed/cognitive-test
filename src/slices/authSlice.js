import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  signIn: {
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },

    setSignInInfo: (state, { payload }) => {
      state.signIn[payload.type] = payload.value;
    },
  },
});

export const { setAuth, setSignInInfo, setUserCredintals } = authSlice.actions;

export default authSlice.reducer;

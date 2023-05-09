import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
    auth: authSlice,
  },
});

export default store;

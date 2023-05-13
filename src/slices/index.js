import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import authSlice from "./authSlice";
import testSlice from "./testSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
    auth: authSlice,
    test: testSlice,
  },
});

export default store;

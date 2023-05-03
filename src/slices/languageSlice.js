import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLang: localStorage.getItem("language") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,

  reducers: {
    setLang: (state, payload) => {
      state.currentLang = payload.payload;
      JSON.stringify(localStorage.setItem("language", payload.payload));
    },
  },
});

export const { setLang } = languageSlice.actions;

export default languageSlice.reducer;

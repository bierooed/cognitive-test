import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CTtestAnswers: {},
};

const testSlice = createSlice({
  name: "test",
  initialState,

  reducers: {
    setCTanswer: (state, { payload }) => {
      state.CTtestAnswers[payload.questionId] = payload;
    },
  },
});

export const { setCTanswer } = testSlice.actions;

export default testSlice.reducer;

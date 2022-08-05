import { createSlice } from "@reduxjs/toolkit";

export const themesSlice = createSlice({
  name: "thema",
  initialState: {
    value: "cupcake",
  },
  reducers: {
    changeToCupcake: (state) => {
      state.value = "cupcake";
    },
    changeToWinter: (state) => {
      state.value = "winter";
    },
    changeToLuxury: (state) => {
      state.value = "luxury";
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeToCupcake, changeToWinter, changeToLuxury } =
  themesSlice.actions;

export default themesSlice.reducer;

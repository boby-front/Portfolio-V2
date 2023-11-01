import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: JSON.parse(localStorage.getItem("sunMode")) || true,
};

export const sunModeSlice = createSlice({
  name: "sunMode",
  initialState,
  reducers: {
    toggleSunMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem("sunMode", JSON.stringify(state.mode));
    },
  },
});

export const { toggleSunMode } = sunModeSlice.actions;

export default sunModeSlice.reducer;

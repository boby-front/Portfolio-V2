import { configureStore } from "@reduxjs/toolkit";
import sunModeReducer from "./slices/sunModeSlice";

export const store = configureStore({
  reducer: {
    sunMode: sunModeReducer,
  },
});

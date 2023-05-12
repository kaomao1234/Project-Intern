import { configureStore } from "@reduxjs/toolkit";
import homeControllerSlice from "./feature/homecontroller";
export const store = configureStore({
  reducer: {
    homecontroller: homeControllerSlice,
  },
});

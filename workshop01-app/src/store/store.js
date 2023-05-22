import { configureStore } from "@reduxjs/toolkit";
import homeViewModelSlice from "./feature/homeviewmodel";
import menuDetailControllerSlice from "./feature/menudetailcontroller";
import sessionSlice from "./feature/session";
export const store = configureStore({
  reducer: {
    homeviewmodel: homeViewModelSlice,
    menudetailcontroller: menuDetailControllerSlice,
    session: sessionSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import homeViewModelSlice from "./feature/homeviewmodel";
import menuDetailViewModelSlice from "./feature/menudetailviewmodel";
import sessionSlice from "./feature/session";
export const store = configureStore({
  reducer: {
    homeviewmodel: homeViewModelSlice,
    menudetailviewmodel: menuDetailViewModelSlice,
    session: sessionSlice,
  },
});

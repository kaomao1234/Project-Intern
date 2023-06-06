import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./feature/home";
import  menuDetailSlice  from "./feature/menudetail";
export const store = configureStore({
  reducer: {
    home: homeSlice,
    menudetail: menuDetailSlice,
  },
});

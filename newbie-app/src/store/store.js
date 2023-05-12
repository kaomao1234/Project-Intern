import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/feature/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

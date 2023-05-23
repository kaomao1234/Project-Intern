import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "./feature/session";
export const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
});

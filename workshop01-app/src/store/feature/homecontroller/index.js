import { createSlice } from "@reduxjs/toolkit";
import { HomeViewModel } from "../../../viewmodel";
export const homeControllerSlice = createSlice({
  name: "homecontroller",
  initialState: {
    viewmodel: new HomeViewModel(),
  },
  reducers: {},
});

export const {} = homeControllerSlice.actions;

export default homeControllerSlice.reducer;

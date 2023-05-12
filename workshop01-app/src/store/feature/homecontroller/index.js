import { createSlice } from "@reduxjs/toolkit";
import { HomeViewModel } from "../../../viewmodel";
const model = new HomeViewModel();
export const homeControllerSlice = createSlice({
  name: "homecontroller",
  initialState: {
    totalPrice: 0,
    data: model.mockdata,
  },
  reducers: {
    increase: (state, action) => {
      model.increase(action.payload);
      state.data = model.mockdata;
    },
    decrease: (state, action) => {
      model.decrease(action.payload);
      state.data = model.mockdata;
    },
    remove: (state, action) => {
      model.remove(action.payload);
      state.data = model.mockdata;
    },
    totalize: (state) => {
      state.totalPrice = model.totalize();
    },
  },
});

export const { increase, decrease, remove, totalize } =
  homeControllerSlice.actions;

export default homeControllerSlice.reducer;

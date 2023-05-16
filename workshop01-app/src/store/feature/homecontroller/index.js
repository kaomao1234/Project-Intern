import { createSlice } from "@reduxjs/toolkit";
import { HomeViewModel } from "../../../viewmodel";
const viewmodel = new HomeViewModel();
export const homeControllerSlice = createSlice({
  name: "homecontroller",
  initialState: {
    totalPrice: 0,
    orders: viewmodel.orders,
    menu: viewmodel.menu,
  },
  reducers: {
    increase: (state, action) => {},
    decrease: (state, action) => {},
    remove: (state, action) => {},
    totalize: (state) => {},
    addTocart: (state, action) => {},
    removeFromcart: (state, action) => {},
  },
});

export const {
  increase,
  decrease,
  remove,
  totalize,
  addTocart,
  removeFromcart,
} = homeControllerSlice.actions;

export default homeControllerSlice.reducer;

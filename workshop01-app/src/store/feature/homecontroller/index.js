import { createSlice } from "@reduxjs/toolkit";
import { HomeViewModel } from "../../../viewmodel";
const viewmodel = new HomeViewModel();
export const homeControllerSlice = createSlice({
  name: "homecontroller",
  initialState: {
    totalPrice: 0,
    menuCart: viewmodel.menuCart,
    menu: viewmodel.menu,
  },
  reducers: {
    increase: (state, action) => {
      viewmodel.increase(action.payload);
      state.menuCart = viewmodel.menuCart;
    },
    decrease: (state, action) => {
      viewmodel.decrease(action.payload);
      state.menuCart = viewmodel.menuCart;
    },
    remove: (state, action) => {
      viewmodel.remove(action.payload);
      state.menuCart = viewmodel.menuCart;
    },
    totalize: (state) => {
      state.totalPrice = viewmodel.totalize();
    },
    addTocart: (state, action) => {
      viewmodel.addTocart(action.payload);
      state.menuCart = viewmodel.menuCart;
    },
    removeFromcart: (state, action) => {
      viewmodel.removeFromcart(action.payload);
      state.menuCart = viewmodel.menuCart;
    },
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

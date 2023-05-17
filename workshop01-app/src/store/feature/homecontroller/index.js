import { createSlice } from "@reduxjs/toolkit";
import { HomeViewModel } from "../../../viewmodel";
var viewmodel = new HomeViewModel();
export const homeControllerSlice = createSlice({
  name: "homecontroller",
  initialState: {
    menu: viewmodel.menu,
    totalPrice: 0,
    orderItems: [],
    table: [1, 2, 3, 4, 5],
  },
  reducers: {
    createOrder: (state, action) => {
      viewmodel.createOrder(action.payload);
    },

    createOrderItem: (state, action) => {
      viewmodel.createOrderItem(action.payload);
      state.orderItems = viewmodel.readOrderItems();
    },
    updateOrderItem: (state, action) => {
      viewmodel.updateOrderItem(action.payload);
      state.orderItems = viewmodel.readOrderItems();
    },
    deleteOrderItem: (state, action) => {
      viewmodel.deleteOrderItem(action.payload.id);
      state.orderItems = viewmodel.readOrderItems();
    },
    totalPrice: (state) => {
      state.totalPrice = viewmodel.totalPrice();
    },
    deleteTableNumber: (state, action) => {
      state.table.splice(action.payload);
    },
  },
});

export const {
  createOrder,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
  totalPrice,
  deleteTableNumber,
} = homeControllerSlice.actions;

export default homeControllerSlice.reducer;

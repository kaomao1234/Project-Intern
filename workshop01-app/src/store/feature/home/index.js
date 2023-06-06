import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    menus: [],
    totalPrice: 0,
    orderItems: [],
    selectedTable: null,
    available:false
  },
  reducers: {
    setState: (state, action) => {
      Object.assign(state, action.payload);
      state.available = true;
    },
  },
});
export const { setState } = homeSlice.actions;
export default homeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const menuDetailSlice = createSlice({
  name: "menudetail",
  initialState: {
    menu:null,
    selectedTable: null,
    quantity:1,
    available: false,
  },
  reducers: {
    setState: (state, action) => {
      Object.assign(state, action.payload);
      state.available = true;
    },
  },
});
export const { setState } = menuDetailSlice.actions;
export default menuDetailSlice.reducer;

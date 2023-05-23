import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    value: {},
  },
  reducers: {
    setSession: (state, action) => {
      Object.assign(state.value, action.payload);
    },
  },
});
export const { setSession } = sessionSlice.actions;
export default sessionSlice.reducer;

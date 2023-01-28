import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addWish: (state, action) => {
      state.data.push(action.payload);
    },
    removeWish: (state, action) => {
      state.data = state.data.filter((el) => el._id !== action.payload);
    },
  },
});

export const { addWish, removeWish } = wishlistSlice.actions;

export default wishlistSlice.reducer;

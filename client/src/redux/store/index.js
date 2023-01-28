import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataSlice from "../slice/dataSlice";
import wishlistSlice from "../slice/wishlistSlice";

export const store = configureStore({
  reducer: { dataSlice: dataSlice, wishlistSlice: wishlistSlice },
  middleware: [thunk],
});

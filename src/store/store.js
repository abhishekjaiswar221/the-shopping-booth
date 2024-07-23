import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import heroSlice from "./heroSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    heroProducts: heroSlice,
  },
});

export default store;

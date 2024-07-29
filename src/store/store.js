// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
// import productSlice from "./productSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//     products: productSlice,
//   },
// });

// export default store;

// New Way*******************************************************************
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { productSlice } from "./productSlice";
import carouselSlice from "./carouselSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    carousel: carouselSlice,
    [productSlice.reducerPath]: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSlice.middleware),
});

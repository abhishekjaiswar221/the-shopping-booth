// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
// // import heroSlice from "./heroSlice";
// import productSlice from "./productSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//     products: productSlice,
//     // heroProducts: heroSlice,
//   },
// });

// export default store;

// import postsReducer from "../features/posts/postsSlice";
// import usersReducer from "../features/users/usersSlice";
// import notificationsReducer from "../features/notifications/notificationsSlice";

// New Way*******************************************************************
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { productSlice } from "./productSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    [productSlice.reducerPath]: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSlice.middleware),
});

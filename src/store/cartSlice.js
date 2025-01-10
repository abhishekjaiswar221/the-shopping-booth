import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.minimumOrderQuantity = Math.max(0, action.payload.quantity);
      }
    },
  },
});

export const { add, updateQuantity, remove } = cartSlice.actions;
export default cartSlice.reducer;

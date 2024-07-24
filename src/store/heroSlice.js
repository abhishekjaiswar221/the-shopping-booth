// import axios from "axios";
// import StatusCode from "@/utils/StatusCode";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   data: [],
//   status: StatusCode.IDEAL,
// };

// const heroSlice = createSlice({
//   name: "heroProducts",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(getHeroProducts.pending, (state) => {
//         state.status = StatusCode.LOADING;
//       })
//       .addCase(getHeroProducts.fulfilled, (state, action) => {
//         state.status = StatusCode.IDEAL;
//         state.data = action.payload;
//       })
//       .addCase(getHeroProducts.rejected, (state) => {
//         state.status = StatusCode.ERROR;
//       });
//   },
// });

// export const { fetchHeroProducts } = heroSlice.actions;
// export default heroSlice.reducer;

// export const getHeroProducts = createAsyncThunk(
//   "heroProducts/get",
//   async () => {
//     const response = await axios.get(
//       `${import.meta.env.VITE_HERO_URL}/products/category/home-decoration?limit=5&skip=3`
//     );
//     console.log(response.data.products);
//     return response.data.products;
//   }
// );

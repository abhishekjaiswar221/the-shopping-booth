// import axios from "axios";
// import StatusCode from "@/utils/StatusCode";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   data: [],
//   status: StatusCode.IDEAL,
// };

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProducts.pending, (state) => {
//         state.status = StatusCode.LOADING;
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.status = StatusCode.IDEAL;
//         state.data = action.payload;
//       })
//       .addCase(getProducts.rejected, (state) => {
//         state.status = StatusCode.ERROR;
//       });
//   },
// });

// export const { fetchProducts } = productSlice.actions;
// export default productSlice.reducer;

// export const getProducts = createAsyncThunk("products/get", async () => {
//   const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
//   return response.data.products;
// });

// New Way*******************************************************************
// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const productSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "products",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getAllProducts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () =>
        "/products?limit=18&select=id,thumbnail,title,description,price",
    }),
    getHomeDecorProducts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () =>
        "/products/category/home-decoration?limit=18&select=id,thumbnail,title,description,price",
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAllProductsQuery, useGetHomeDecorProductsQuery } =
  productSlice;

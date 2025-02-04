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
        "/products/category/mobile-accessories?limit=8&sortBy=title&order=asc&select=id,thumbnail,title,price,brand,minimumOrderQuantity",
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAllProductsQuery } = productSlice;

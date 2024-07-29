import StatusCode from "@/utils/StatusCode";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: StatusCode.IDEAL,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarouselProducts.pending, (state) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getCarouselProducts.fulfilled, (state, action) => {
        state.status = StatusCode.IDEAL;
        state.data = action.payload;
      })
      .addCase(getCarouselProducts.rejected, (state) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchCarouselProducts } = carouselSlice.actions;
export default carouselSlice.reducer;

export const getCarouselProducts = createAsyncThunk(
  "/carouselProducts/get",
  async () => {
    let response = axios.get(
      `${import.meta.env.VITE_BASE_URL}/products/category/home-decoration?limit=6&select=id,thumbnail,title,description,price`
    );
    return (await response).data.products;
  }
);

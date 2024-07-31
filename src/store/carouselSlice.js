import HTTPStatus from "@/utils/HTTPStatus";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: HTTPStatus.IDEAL,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarouselProducts.pending, (state) => {
        state.status = HTTPStatus.LOADING;
      })
      .addCase(getCarouselProducts.fulfilled, (state, action) => {
        state.status = HTTPStatus.IDEAL;
        state.data = action.payload;
      })
      .addCase(getCarouselProducts.rejected, (state) => {
        state.status = HTTPStatus.ERROR;
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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductDetailsService } from "../service/api/products";
import { RootState } from "../store";
import { Product } from "./interfaces";

export const getProductDetails = createAsyncThunk("get/productDetails", () => {
  return getProductDetailsService();
});

const initialState: Product = {
  product: undefined,
  loading: false,
};

const searchSlice = createSlice({
  name: "pdp",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetails.pending as any]: (state) => {
      return { ...state, loading: true };
    },
    [getProductDetails.fulfilled as any]: (state, action) => {
      return { ...state, loading: false, product: action.payload.product };
    },
  },
});

export const productStates = (state: RootState) => state.pdp;
export default searchSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsService } from "../service/api/products";
import { RootState } from "../store";

//interfaces
import { Products } from "./interfaces/index";

export const getProducts = createAsyncThunk("get/products", (query: string) => {
  return getProductsService(query);
});

const initialState: Products = {
  products: [],
  loading: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state) => {
      return { ...state, products: [] };
    },
  },
  extraReducers: {
    [getProducts.pending as any]: (state: Products) => {
      return { ...state, loading: true };
    },
    [getProducts.fulfilled as any]: (state: Products, action) => {
      return { ...state, loading: false, products: action.payload };
    },
  },
});

export const { clearSearch } = searchSlice.actions;
export const productStates = (state: RootState) => state.search;
export default searchSlice.reducer;

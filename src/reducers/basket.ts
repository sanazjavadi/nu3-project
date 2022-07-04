import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

//interfaces
import { Items, cardItem } from "./interfaces";

const initialState: Items = {
  basketItems: [] as Array<cardItem>,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        basketItems: [...action.payload],
      };
    },
    resetCart: () => {
      return initialState;
    },
  },
});

export const { addProduct, resetCart } = basketSlice.actions;
export const basketItemsStates = (state: RootState) => state.basket;
export default basketSlice.reducer;

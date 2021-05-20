import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProducts as getProductsFromApi } from "../utils/api/fetchProducts";

const initialState: Products = {
  products: [],
  cart: [],
  status: null,
};

type Products = {
  products: ProductsInfo[];
  cart: CartItemInfo[];
  status: string | null;
};

interface ProductsInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
interface CartItemInfo {
  id: number;
  title: string;
  price: number;
}

export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProductsFromApi();
    return products;
  }
);

export const shopSlice = createSlice({
  name: "Shop",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "succeded";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default shopSlice.reducer;

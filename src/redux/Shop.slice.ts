import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getProducts as getProductsFromApi } from "../utils/api/fetchProducts";

const initialState: Products = {
  products: [],
  cart: [],
  search: "",
  status: null,
};

type Products = {
  products: ProductsInfo[];
  cart: CartInfo[];
  search: string;
  status: string | null;
};

type ProductsInfo = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  qty: number;
};
type CartInfo = {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  qty?: number;
};

type Qty = {
  id?: number;
  qty: number;
};

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
  reducers: {
    addToCart: (state, action: PayloadAction<number | undefined>) => {
      const item = state.products.find((prod) => prod.id === action.payload);

      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, qty: item.qty! + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    },
    removeFromCart: (state, action: PayloadAction<number | undefined>) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
    adjustQty: (state, action: PayloadAction<Qty>) => {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    },
    searchItem: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    locationChange: (state) => {
      return {
        ...state,
        search: "",
      };
    },
    checkout: (state) => {
      return {
        ...state,
        cart: [],
      };
    },
  },
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

export const {
  addToCart,
  removeFromCart,
  adjustQty,
  searchItem,
  locationChange,
  checkout,
} = shopSlice.actions;

export default shopSlice.reducer;

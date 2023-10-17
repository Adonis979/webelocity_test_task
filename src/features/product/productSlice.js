import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  filteredProducts: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const result = await axios.get("/products.json");
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      let filteredProducts = [];

      if (action.payload === "All") {
        state.filteredProducts = state.products;
      } else {
        state.products.forEach((product) => {
          if (product.category === action.payload) {
            filteredProducts.push(product);
          }
        });

        state.filteredProducts = filteredProducts;
      }
    },
    sortByPrice: (state, action) => {
      if (action.payload === "low-high") {
        state.filteredProducts.sort((a, b) => a.price - b.price);
      } else state.filteredProducts.sort((a, b) => b.price - a.price);
    },
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { filterByCategory, sortByPrice } = productSlice.actions;

export default productSlice.reducer;

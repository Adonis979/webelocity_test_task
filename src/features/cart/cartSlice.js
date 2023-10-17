import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  orderTotal: 0,
  orderQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartProducts[itemIndex].quantity += 1;
      } else {
        state.cartProducts = [...state.cartProducts, action.payload];
      }
      state.orderTotal += action.payload.price;
      state.orderQuantity += 1;
    },
    deleteFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );
      state.orderTotal -= action.payload.price * action.payload.quantity;
      state.orderQuantity -= action.payload.quantity;
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (state.cartProducts[itemIndex].quantity < 10) {
        state.cartProducts[itemIndex].quantity += 1;
        state.orderTotal += action.payload.price;
        state.orderQuantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (state.cartProducts[itemIndex].quantity > 1) {
        state.cartProducts[itemIndex].quantity -= 1;
        state.orderTotal -= action.payload.price;
        state.orderQuantity -= 1;
      }
    },
  },
});

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

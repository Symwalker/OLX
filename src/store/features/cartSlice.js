import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload, "payload wala");
      // this code is checking whether the item is already in cart or not
      const isContain = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (isContain === -1) {
        state.cart.push(action.payload);
        console.log(state.cart, "cart wala");
      } else {
        state.cart[isContain].quantity += 1;
        state.cart[isContain].price += +state.cart[isContain].price;
      }
    },

    //   if (isContain === -1) {
    //     state.cart.push(action.payload);
    //   } else {
    //     state.cart[isContain].quantity += 1;
    //     state.cart[isContain].price += state.cart[isContain].price;
    //   }

    //   state.totalPrice += action.payload.price / action.payload.quantity;

    removeToCart: (state, action) => {
        console.log(action.payload, "remove wala");
      const indexToRemove = state.cart.findIndex(
        (item) =>  item.id === action.payload
      );
      console.log(indexToRemove);
      if (indexToRemove !== -1) {
        state.cart.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;

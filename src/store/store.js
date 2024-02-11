import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice';
// this is creating a store


export const store = configureStore({
    reducer : {
        // todos :  todoReducer,
        cart: cartSlice
    }
});
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/components/features/cart/cartSlice"
import  productsReducer from "../src/components/features/products/productsSlice"
import ordersReducer from "../src/components/features/orders/ordersSlice"

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        products:productsReducer,
        orders:ordersReducer
    }
})
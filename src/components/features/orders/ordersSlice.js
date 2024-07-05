import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("orders"))||[]

const ordersSlice = createSlice({
    name:"orders",
    initialState:initialState,
    reducers:{
        setOrders:(state,action)=>{
            localStorage.setItem("orders",JSON.stringify([...state,...action.payload]))
            return [...state,...action.payload]
        }
    }
})

export default ordersSlice.reducer;
export const {setOrders} = ordersSlice.actions;
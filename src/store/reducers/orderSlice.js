import {createSlice} from "@reduxjs/toolkit";
import {createNewOrder, getAllOrders } from "../actions/orderAction";

const INT_STATE = {
    isLoading:false,
    isError:false,
    isSuccess:false,
    orders:[],
    error:null,
};

const orderSlice = createSlice({
    name:'order',
    initialState:INT_STATE,
    extraReducers:{
        //get orders
        [getAllOrders.pending]:(state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false 
            state.error = null
        },
        [getAllOrders.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.orders = action.payload;    
            state.error = null
        },
        [getAllOrders.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true 
            state.isSuccess = false 
            state.orders = []
            state.error = action.payload
        },
        //add new order
        [createNewOrder.pending]:(state)=>{
            state.isLoading = true
            state.isError = false 
            state.isSuccess = false 
            state.error = null
        },
        [createNewOrder.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false 
            state.isSuccess = true 
            state.orders = [...state.orders,action.payload]   
            state.error = null
        },
        [createNewOrder.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true 
            state.isSuccess = false
            state.orders = []
            state.error = action.payload
        },
    }
});
export default orderSlice.reducer;
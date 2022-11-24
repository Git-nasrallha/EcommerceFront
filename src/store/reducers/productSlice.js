import {createSlice} from "@reduxjs/toolkit";
import { fetchAllData } from "../actions/fetchData";
import { getProductsBySlug ,getProductPage } from "../actions/productAction";


const INIT_STATE = {
    isLoading:false,
    isError:false,
    products:null,
    productsByPrice:null,
    errors:null,
    page:null
}

const productSlice = createSlice({
    name:"product",
    initialState:INIT_STATE,
    extraReducers:{
        // get all products
        [fetchAllData.pending]:(state)=>{
            state.isLoading = true
            state.isError = false
        },
        [fetchAllData.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.products = action.payload.products
            state.errors = null
        },
        [fetchAllData.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.products = null
            state.errors = action.payload
        },
        [getProductsBySlug.pending]:(state)=>{
            state.isLoading = true
            state.isError = false
        },
        [getProductsBySlug.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.products = action.payload.products
            state.productsByPrice = action.payload.productsByPrice
            state.errors = null
        },
        // get product by slug
        [getProductsBySlug.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.products = null
            state.productsByPrice = null
            state.errors = action.payload
        },
        //get product page
        [getProductPage.pending]:(state)=>{
            state.isLoading = true
            state.isError = false
        },
        [getProductPage.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.page = action.payload
            state.errors = null
        },
        [getProductPage.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.errors = action.payload
        },
    }

});

export default productSlice.reducer;
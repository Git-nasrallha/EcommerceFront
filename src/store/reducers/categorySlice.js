import {createSlice} from "@reduxjs/toolkit";
import { fetchAllData } from "../actions/fetchData";

const INIT_STATE = {
    isLoading:false,
    isError:false,
    categories:null,
    errors:null
}

const categorySlice = createSlice({
    name:"category",
    initialState:INIT_STATE,
    extraReducers:{
        [fetchAllData.pending]:(state)=>{
            state.isLoading = true
            state.isError = false
        },
        [fetchAllData.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.categories = action.payload.categories
            state.errors = null
        },
        [fetchAllData.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.categories = null
            state.errors = action.payload
        },
    }

});

export default categorySlice.reducer;
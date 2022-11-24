import {createSlice} from "@reduxjs/toolkit";
import { getUser, updateUser, uploadProfileImage, userLogin, userRegister } from "../actions/authAction";
const token = JSON.parse(localStorage.getItem('userToken'));

const INT_STATE = {
    token: token ? token : null ,
    isLoading: false ,
    isAuthonticated: false,
    message:"",
    isError : false ,
    user: null,
    errors: null,
}
const userSlice = createSlice({
    name:"user",
    initialState : INT_STATE,
    reducers:{
        logout:(state)=>{
            state.isAuthonticated = false
            state.token = null
            state.user = null
            state.isError = false
            state.errors = null
            localStorage.removeItem("userToken");
        }
    },
    extraReducers:{
        [userLogin.pending] :(state)=>{
            state.isLoading = true
            state.isAuthonticated = false
            state.isError = false
            state.errors = null
        },
        [userLogin.fulfilled] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = true
            state.isError = false
            state.user = action.payload.user
            state.errors = null
        },
        [userLogin.rejected] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = false
            state.isError = true
            state.user = null
            state.errors = action.payload
        },
        //user register
        [userRegister.pending] :(state)=>{
            state.isLoading = true
            state.isAuthonticated = false
            state.isError = false
            state.errors = null
        },
        [userRegister.fulfilled] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = true
            state.isError = false
            state.message = action.payload
            state.errors = null
        },
        [userRegister.rejected] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = false
            state.isError = true
            state.user = null
            state.errors = action.payload
        },
        // get user
        [getUser.pending] :(state)=>{
            state.isLoading = true
            state.isAuthonticated = false
            state.isError = false
            state.errors = null
        },
        [getUser.fulfilled] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = true
            state.isError = false
            state.user = action.payload.user
            state.errors = null
        },
        [getUser.rejected] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = false
            state.isError = true
            state.user = null
            state.errors = action.payload
        },
        // update user
        [updateUser.pending] :(state)=>{
            state.isLoading = true
            state.isAuthonticated = false
            state.isError = false
            state.error = null
        },
        [updateUser.fulfilled] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = true
            state.isError = false
            state.user = action.payload.user
            state.errors = null
        },
        [updateUser.rejected] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = false
            state.isError = true
            state.user = null
            state.errors = action.payload
        },
         //upload user profile photo
         [uploadProfileImage.pending] :(state)=>{
            state.isLoading = true
            state.isAuthonticated = false
            state.isError = false
            state.errors = null
        },
        [uploadProfileImage.fulfilled] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = true
            state.isError = false
            state.user = action.payload
            state.errors = null
        },
        [uploadProfileImage.rejected] :(state ,action)=>{
            state.isLoading = false
            state.isAuthonticated = false
            state.isError = true
            state.user = null
            state.errors = action.payload
        },
    }
});
export const {logout} = userSlice.actions;
export default userSlice.reducer;
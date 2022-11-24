import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from "react-toastify"
import { logout } from '../reducers/userSlice';
import {config} from "../../config/data.js";

const apiUrl = '/api/users';

// user register
export const userRegister = createAsyncThunk('user/register',async(user,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.post(`${apiUrl}/register`,user);
        if(res.status === 200){
            toast.success(res.data.msg,{
                autoClose:2000,
                position:'top-right'
            })
        }
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// user login
export const userLogin = createAsyncThunk('user/login',async(user,thunkAPI)=>{
    const {rejectWithValue,dispatch} = thunkAPI;
    try {
        const res = await axios.post(`${apiUrl}/login`,user);
        const exp = new Date(res.data.expireTime*1000);
        const difTime = exp.getTime() - new Date().getTime();
        if(res.status === 200){
            const token = JSON.stringify(res.data.token);
            localStorage.setItem('userToken',token);
        };
        autoLogout(dispatch,difTime);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.errors);
    }
});
// get user
export const getUser = createAsyncThunk('user/get',async(_,thunkAPI)=>{
    const {rejectWithValue,dispatch} = thunkAPI;
    try {
        const res = await axios.get(`${apiUrl}/getUser`,config);
        const exp = new Date(res.data.expireTime*1000);
        const difTime = exp.getTime() - new Date().getTime();
        autoLogout(dispatch,difTime);
        return res.data;
    } catch (error) {
        toast.error(error.response.data.errors[0],{
            position:'top-right',
            autoClose:1000,
            theme: "colored"
        })
        return rejectWithValue(error.response.data.errors);
    }
});
// update user
export const updateUser = createAsyncThunk('update/user',async(newData,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.put(`${apiUrl}/updateuser`,newData,config);
        if(res.status === 200){
            toast.success(`${res.data.user.firstName} is successfully updated`,{
                autoClose:3000,
                position:'top-right'
            })
        }
        return ;
    } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
    }
});
// upload user avatar
export const uploadProfileImage = createAsyncThunk('upload/profile image',async(pic,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.post(`${apiUrl}/avatar`,pic,config);
        if(res.status === 200){
            toast.info(`user ${res.data.user.firstName} is successfuly uploaded Profile avatar `,{
                autoClose:2000,
                position:'top-right'
            })
        }
        return res.data.user;
    } catch (error) {
        toast.warn(error.response.data.msg,{
            position:'top-right'
        })
       // console.log(error.response.data);
        return rejectWithValue(error.response.data);
    }
});
const autoLogout =(dispatch,timer)=>{
    setTimeout(() => {
        dispatch(logout());
        console.log('logout');
    }, timer);
};


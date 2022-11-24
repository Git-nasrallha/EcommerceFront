import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {config} from "../../config/data.js";
const apiUrl = '/api/order';

// create new order
export const createNewOrder = createAsyncThunk('order/newOrder',async(newOrder,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.post(`${apiUrl}/addOrder`,newOrder,config);
        if(res.status === 200){
            toast.success("Order Placed Successfully",{autoClose:1000,position:"top-right"});
            window.location.href = '/user/order';
            localStorage.removeItem('cartItems');
        }
        return res.data.order;
    }catch (error) {
       return rejectWithValue(error) 
    }
});
// get all orders
export const getAllOrders = createAsyncThunk('order/getAllOrders',async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.get(`${apiUrl}/userorders`,config);
        return res.data;
    }catch (error) {
       return rejectWithValue(error) 
    }
});




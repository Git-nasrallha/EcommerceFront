import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = '/api/products';

export const getProductsBySlug = createAsyncThunk('getProducts/slug',async(slug,thunkAPI)=>{
    const {rejectWithValue}= thunkAPI;
    try {
        const res = await axios.get(`${apiUrl}/${slug}`);
         return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// get product page 
export const getProductPage = createAsyncThunk('getProduct/page',async(payload,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const {cid , type} = payload;
        const res = await axios.get(`/api/page/${cid}/${type}`);
        return res.data.page;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
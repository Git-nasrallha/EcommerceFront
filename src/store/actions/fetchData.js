import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = '/api/fetchData'

export const fetchAllData = createAsyncThunk('getData/all',async(_,thunkAPI)=>{
    const {rejectWithValue}= thunkAPI;
    try {
        const res = await axios.get(apiUrl);
        return res.data;
        
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
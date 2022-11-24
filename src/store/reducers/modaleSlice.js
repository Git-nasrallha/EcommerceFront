import {createSlice} from "@reduxjs/toolkit";


const INT_STATE = {
    show:false
};

const modalSlice = createSlice({
    name:'modal',
    initialState:INT_STATE,
    reducers:{
        showModal:(state)=>{state.show = true},
        closeModal:(state)=>{state.show = false }
    }
   
});

export const {showModal ,closeModal} = modalSlice.actions;
export default modalSlice.reducer;
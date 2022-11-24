import {configureStore } from "@reduxjs/toolkit";
import category from "./reducers/categorySlice";
import product from "./reducers/productSlice";
import user from "./reducers/userSlice";
import cart from "./reducers/cartSlice";
import order from "./reducers/orderSlice";
import modal from "./reducers/modaleSlice";
 
const store = configureStore({
    reducer:{
        category,
        product,
        user,
        cart,
        order,
        modal
    }
    
});

export default store;
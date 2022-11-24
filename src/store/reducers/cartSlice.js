import {createSlice} from "@reduxjs/toolkit";

const INT_STATE = {
    isLoading:false,
    isError:false,
    cart:JSON.parse(localStorage.getItem('cartItems'))?
            JSON.parse(localStorage.getItem('cartItems')):[],
    error:null,
    cartTotalQuantity:0,
    cartTotalAmount:0
};

const cartSlice = createSlice({
    name:'cart',
    initialState:INT_STATE,
    reducers:{
        addToCart:(state,action)=>{
            const exsitItem = state.cart.find(cartItem=>cartItem.productId === action.payload);
            if(exsitItem){
                exsitItem.quantity++;
                localStorage.setItem("cartItems",JSON.stringify(state.cart));
            }else{
                const newItem = {productId:action.payload , quantity:1};
                state.cart = [...state.cart,newItem];
                localStorage.setItem("cartItems",JSON.stringify(state.cart));
            }
        },
        decreaseItem:(state,action)=>{
            const item = state.cart.find(cartItem=>cartItem.productId === action.payload);
            if(item.quantity === 1){
               state.cart = state.cart.filter(({productId})=>productId !== item.productId );
               localStorage.setItem("cartItems",JSON.stringify(state.cart));
            }else{
                item.quantity--;
                localStorage.setItem("cartItems",JSON.stringify(state.cart));
            }
        },
        deleteItemFromCart:(state,action)=>{
            state.cart = state.cart.filter(({productId})=>action.payload !== productId);
            localStorage.setItem("cartItems",JSON.stringify(state.cart));
        }
    }
});
export const {addToCart,decreaseItem,deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;
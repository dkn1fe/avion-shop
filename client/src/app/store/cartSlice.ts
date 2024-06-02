import { createSlice } from "@reduxjs/toolkit";

interface CartInfo {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imgUrl:string,
    description:string
}

interface CartItem {
    cartItems:CartInfo[]
}

const initialState:CartItem = {
    cartItems:[]
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
         addCart(state,action){
            state.cartItems = [...state.cartItems,action.payload]
         },
         removeCart(state,action){
             state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
         }
    }
})

export const { addCart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[],
    total:0
}

const carritoSlice = createSlice({
    name: "carrito",
    initialState,
    reducers:{
        addCartItem: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItemIndex = state.items.findIndex((item) => item.id === id);
            
            if (existingItemIndex === -1) {
                state.items.push({ ...action.payload });
            } else {
                state.items[existingItemIndex].quantity += quantity;
            }
            state.total = state.items.reduce((acc, item)=> acc = acc + item.price * item.quantity,0)
            
        },
        deleteCartItem:(state,actions)=>{
            state.items = state.items.filter((item)=> item.id !== actions.payload)
            state.total = state.items.reduce((acc, item)=> acc = acc + item.price * item.quantity,0)
        },
        deleteCarrito : (state) =>{
            state.total = 0 
            state.items = []
        }
    }
})


export const {addCartItem, deleteCartItem, deleteCarrito } = carritoSlice.actions

export default carritoSlice.reducer
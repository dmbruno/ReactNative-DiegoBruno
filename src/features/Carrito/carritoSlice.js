import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    total:0
}

const carritoSlice = createSlice({
    name: "carrito",
    initialState,
    reducers:{
        addCartItem:(state,actions) =>{
            const index = state.items.some((item)=> item.id === actions.payload.id)
            if(!index){
                state.items = [...state.items,{...actions.payload,quantity:1}]
            }else{
                state.items = state.items.map((item)=>{
                    if(item.id=== actions.payload.id){
                        return {...item,quantity: item.quantity + 1}
                    }
                    return item
                })
            }
            state.total = state.items.reduce((acc, item)=> acc = acc + item.price * item.quantity,0)
            
        },
        deleteCartItem:(state,actions)=>{
            state.items = state.items.filter((item)=> item.id !== actions.payload)
            state.total = state.items.reduce((acc, item)=> acc = acc + item.price * item.quantity,0)
        }
    }
})


export const {addCartItem, deleteCartItem } = carritoSlice.actions

export default carritoSlice.reducer
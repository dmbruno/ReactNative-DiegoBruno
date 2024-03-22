import { createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {
        deleteOrder: (state, action) => {
            const orderId = action.payload;
            return state.filter(order => order.id !== orderId);
            console.log(orderId);
        },
    },
});


export const { deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
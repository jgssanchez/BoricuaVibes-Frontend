import { createSlice } from "@reduxjs/toolkit";
import { createOrder, editOrder, getOrders, getUserOrders } from "../actions/orderActions";

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        loading: true,
        userOrders: [],
        orders: []
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getOrders.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.orders = action.payload
        })
        .addCase(getOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(getUserOrders.pending, (state) => {
            state.loading = true;
        })
        .addCase(getUserOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.userOrders = action.payload
        })
        .addCase(getUserOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(createOrder.pending, (state) => {
            state.loading = true;
        })
        .addCase(createOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.userOrders.push(action.payload)
        })
        .addCase(createOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(editOrder.pending, (state) => {
            state.loading = true;
        })
        .addCase(editOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.orders = state.orders.map(order => order._id === action.payload._id ? action.payload : order)
        })
        .addCase(editOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

export default orderSlice.reducer;
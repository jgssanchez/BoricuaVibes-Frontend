import { createSlice } from "@reduxjs/toolkit";
import { clearUserCart, getUserCart, manageCartProduct, updateProductInCart } from "../actions/cartActions";

const cartSlice = createSlice({
    name: 'usercart',
    initialState: {
        loading: true,
        userCart: []
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserCart.pending, (state) => {
            state.loading = true;
        })
        .addCase(getUserCart.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.userCart = action.payload
        })
        .addCase(getUserCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(manageCartProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(manageCartProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.userCart = action.payload;
        })
        .addCase(manageCartProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(updateProductInCart.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateProductInCart.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.userCart = action.payload;
        })
        .addCase(updateProductInCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(clearUserCart.pending, (state) => {
            state.loading = true;
        })
        .addCase(clearUserCart.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.userCart = action.payload;
        })
        .addCase(clearUserCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

export default cartSlice.reducer;
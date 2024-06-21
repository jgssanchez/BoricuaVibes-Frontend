import { createSlice } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, editProduct, getAllProducts, getProduct } from "../actions/productActions";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: true,
        products: [],
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(createProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products.push(action.payload);
        })
        .addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(editProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(editProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = state.products.map((product) =>
                product._id === action.payload._id ? action.payload : product
              );
        })
        .addCase(editProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(deleteProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = state.products.filter((product) => product._id !== action.payload._id);
        })
        .addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(getProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.product = action.payload; 
        })
        .addCase(getProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

export default productSlice.reducer;
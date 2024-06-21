import { createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../../utils/clientAxios";

export const getUserCart = createAsyncThunk("getUserCart", async () => {
    const response = await clientAxios.get(`/users/user-cart`);
    return response.data;
});

export const manageCartProduct = createAsyncThunk("manageCartProduct", async (id) => {
    const response = await clientAxios.post(`/users/manage-cart-product`, id);
    return response.data;
});

export const updateProductInCart = createAsyncThunk("updateProductInCart", async (data) => {
    const response = await clientAxios.put(`/users/update-product-in-cart`, data);
    return response.data;
})

export const clearUserCart = createAsyncThunk("clearUserCart", async () => {
    const response = await clientAxios.get(`/users/clear-cart`);
    return response.data;
})
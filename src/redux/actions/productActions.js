import { createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../../utils/clientAxios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await clientAxios.get(`/products`);
    return response.data;
});

export const createProduct = createAsyncThunk("createProduct", async (data) => {
    const response = await clientAxios.post(`/products/create`, data);
    return response.data;
})

export const editProduct = createAsyncThunk("editProduct", async (data) => {
    const response = await clientAxios.put(`/products/edit/${data.id}`, data);
    return response.data;
})

export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
    const response = await clientAxios.delete(`/products/delete/${id}`);
    return response.data;
})

export const getProduct = createAsyncThunk("getProduct", async (id) => {
    const response = await clientAxios.get(`/products/${id}`);
    return response.data;
})
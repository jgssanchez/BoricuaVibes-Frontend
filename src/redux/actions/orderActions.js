import { createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../../utils/clientAxios";

export const getOrders = createAsyncThunk("getOrders", async () => {
    const response = await clientAxios.get(`/orders`);
    return response.data;
});

export const getUserOrders = createAsyncThunk("getUserOrders", async () => {
    const response = await clientAxios.get(`/orders/user-orders`);
    return response.data;
});

export const createOrder = createAsyncThunk("createOrder", async (data) => {
    const response = await clientAxios.post(`/orders/create`, data);
    return response.data;
})

export const editOrder = createAsyncThunk("editOrder", async (data) => {
    const response = await clientAxios.put(`/orders/edit/${data.id}`, data);
    return response.data;
})

export const deleteOrder = createAsyncThunk("deleteOrder", async (id) => {
    const response = await clientAxios.delete(`/orders/delete/${id}`);
    return response.data;
})
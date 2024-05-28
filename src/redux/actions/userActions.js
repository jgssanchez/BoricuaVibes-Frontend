import { createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../../utils/clientAxios";

export const getUser = createAsyncThunk("getUser", async () => {
    const response = await clientAxios.get(`/users/get-user`);
    return response.data;
});

export const loginUser = createAsyncThunk("loginUser", async (data) => {
    const response = await clientAxios.post(`/users/login-user`, data);
    return response.data;
});

export const logoutUser = createAsyncThunk("logoutUser", async () => {
    const response = await clientAxios.get(`/users/logout-user`);
    return response.data;
});

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
    const response = await clientAxios.get(`/users`);
    return response.data;
});

export const editUser = createAsyncThunk("editUser", async (data) => {
    const response = await clientAxios.put(`/users/edit/${data._id}`, data);
    return response.data;
});

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
    const response = await clientAxios.delete(`/users/delete/${id}`);
    return response.data;
});
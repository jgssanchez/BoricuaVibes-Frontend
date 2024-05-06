import { createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../../utils/clientAxios";


export const getUser = createAsyncThunk("getUser", async () => {
    const response = await clientAxios.get(`/users/get-user`);
    return response.data;
});
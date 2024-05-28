import { createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../../utils/clientAxios";


export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await clientAxios.get(`/products/`);
    return response.data;
});

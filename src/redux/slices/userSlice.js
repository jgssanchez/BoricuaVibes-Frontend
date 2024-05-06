import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/userActions";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuthenticated: false,
        loading: true,
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
            state.user = action.payload;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.isAuthenticated = false;
        })
    },
})

export default userSlice.reducer;
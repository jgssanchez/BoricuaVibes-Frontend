import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productReducer from './slices/productsSlice';

export const store = configureStore({
    reducer: {
        user : userReducer,
        product: productReducer,
    },
})
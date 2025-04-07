import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userslice';
import casesReducer from './caseslice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cases: casesReducer
    }
})
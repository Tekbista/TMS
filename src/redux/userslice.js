import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";


const initialState = {value: true} 

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) =>{
            state.value = true
        },
        logout: (state) =>{
            state.value = false;
            
        }
    }
})


export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
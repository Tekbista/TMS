import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: true} 

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) =>{
            state.value = true
        },
        logout: (state) =>{
            state.value = false
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
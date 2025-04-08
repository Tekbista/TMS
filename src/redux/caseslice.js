import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCases = createAsyncThunk(
    "cases/fetchCases",
    async(_, {rejectedWithValue}) =>{
        try{
            const response = await fetch("http://localhost:8000/cases");
            if(!response.ok){
                return new Error("Couldn't fetch cases");
            }
            return response.json();
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }
);

export const fetchCaseById = createAsyncThunk(
    "cases/fetchCaseById",
    async(id, {rejectedWithValue}) =>{
        try{
            const response = await fetch(`http://localhost:8000/cases/${id}`);
            if(!response.ok){
                return new Error("Couldn't fetch case");
            }
            return response.json();
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }
)

const casesSlice = createSlice({
    name: "cases",
    initialState: {
        items: [],
        loading: false,
        error: "",
        selectedItem: null,
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(fetchCases.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCases.fulfilled, (state, action) =>{
                state.loading = false;
                state.items = action.payload
            })
            .addCase(fetchCases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(fetchCaseById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCaseById.fulfilled, (state, action) =>{
                state.loading = false;
                state.selectedItem = action.payload
            })
            .addCase(fetchCaseById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default casesSlice.reducer

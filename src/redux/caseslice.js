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

export const createCase = createAsyncThunk(
    "cases/createCase",
    async(caseData, {rejectedWithValue}) =>{
        try{
            const response = await fetch("http://localhost:8000/cases", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(caseData)
            });
            if(!response.ok){
                return new Error("Couldn't create case");
            }
            return "Case created successfully";
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }
);
export const updateCase = createAsyncThunk(
    "cases/updateCase",
    async({id, caseData}, {rejectedWithValue}) =>{
        try{
            const response = await fetch(`http://localhost:8000/cases/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(caseData)
            });
            if(!response.ok){
                return new Error("Couldn't update case");
            }
            return "Case updated successfully";
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }       
);

export const deleteCase = createAsyncThunk(
    "cases/deleteCase",
    async(id, {rejectedWithValue}) =>{
        try{
            const response = await fetch(`http://localhost:8000/cases/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!response.ok){
                return new Error("Couldn't delete case");
            }
            return id;
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }
);

export const searchCases = createAsyncThunk(
    "cases/searchCases",
    async(searchTerm, {rejectedWithValue}) =>{
        try{
            const response = await fetch(`http://localhost:8000/cases?q=${searchTerm}`);
            if(!response.ok){
                return new Error("Couldn't search cases");
            }
            return response.json();
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }
);
export const filterCases = createAsyncThunk(
    "cases/filterCases",
    async(filter, {rejectedWithValue}) =>{
        try{
            const response = await fetch(`http://localhost:8000/cases?status=${filter}`);
            if(!response.ok){
                return new Error("Couldn't filter cases");
            }
            return response.json();
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }
);
export const sortCases = createAsyncThunk(
    "cases/sortCases",
    async(sortBy, {rejectedWithValue}) =>{
        try{
            const response = await fetch(`http://localhost:8000/cases?_sort=${sortBy}`);
            if(!response.ok){
                return new Error("Couldn't sort cases");
            }
            return response.json();
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }
);

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
            .addCase(createCase.pending, (state) => {
                state.loading = true;
            })  
            .addCase(createCase.fulfilled, (state, action) =>{
                state.loading = false;
                state.items.push(action.payload)
            })
            .addCase(createCase.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default casesSlice.reducer

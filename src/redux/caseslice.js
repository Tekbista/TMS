import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCases = createAsyncThunk(
    "cases/fetchCases",
    async(_, {rejectedWithValue}) =>{
        try{
            const response = await fetch("cases.json");
            if(!response.ok){
                return new Error("Couldn't fetch cases");
            }
            return response.json();
        }catch(error){
            return rejectedWithValue(error.message)
        }
    }
);

export const getCaseById = (state, caseId) =>{
    return state.cases.items.find((item) => item.id === caseId);
}

const casesSlice = createSlice({
    name: "cases",
    initialState: {
        items: [],
        loading: false,
        error: ""
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
    }
})

export const {setLoading, setItems, getSelectedItem} = casesSlice.actions
export default casesSlice.reducer

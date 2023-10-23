import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState: [],
    reducers: {
        addTohistory: (state, action) => {
            state.push(action.payload)
        }
    }
})



export const { addTohistory } = historySlice.actions;

export default historySlice.reducer;
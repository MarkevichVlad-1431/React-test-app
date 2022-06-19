import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tests: [
        {id: 1, text: 'First test'},
        {id: 2, text: 'Second test'},
        {id: 3, text: 'I do to school'},


    ],

}

const TextSlice = createSlice({
    name: 'test',
    initialState,
    reducers:{
        updateStoreTests: (state, action) => {
            state.tests.push(action.payload);
        }
    }
})

export const {updateStoreTests} = TextSlice.actions;

export default TextSlice.reducer;
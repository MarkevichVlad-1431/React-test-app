import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: null,
    error: null,
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, {rejectWithValue}) => {
        const responce = await fetch("http://localhost:10000/Posts");

        try {

            if (!responce.ok) {
                throw new Error;
            }
            const data = await responce.json();
            return data;
            
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'fulfill'
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'reject';
            
        },


    }
})

export default PostsSlice.reducer;
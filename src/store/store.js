import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from './PostsSlice';

export default configureStore({
    reducer: {
        Posts: PostsReducer
    }
})
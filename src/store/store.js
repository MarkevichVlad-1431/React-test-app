import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from './PostsSlice';
import TestReducer from './TestSlice';


export default configureStore({
    reducer: {
        Posts: PostsReducer,
        Test: TestReducer
    }
})
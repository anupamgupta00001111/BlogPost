import { configureStore } from "@reduxjs/toolkit";
import NewBlogSlice from "./Slices/NewBlogSlice";

export const store = configureStore({
    reducer: {
        newBlog: NewBlogSlice,
    },
});
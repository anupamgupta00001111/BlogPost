import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    blogs: [{
        id: nanoid(),
        title: "The Benefits of Regular Exercise",
        category: "Health and Wellness",
        content: "In today's fast-paced world, maintaining a healthy lifestyle has become more important than ever. One of the key pillars of a healthy lifestyle is regular exercise. Engaging in physical activity offers a wide range of benefits that positively impact both our physical and mental well-being.",
        like: false
    },
    {
        id: nanoid(),
        title: " Exploring Remote Work: Advantages and Challenges",
        category: "Business and Career",
        content: "In recent years, remote work has emerged as a significant trend in the business world, transforming the way companies and employees approach work. This shift has been accelerated by technological advancements and the changing dynamics of the modern workplace. While remote work offers numerous advantages, it also comes with its own set of challenges.",
        like: false
    }
    ],
}

export const NewBlogSlice = createSlice({
    name: "newBlog",
    initialState,
    reducers: {
        addBlog: (state, action)=> {
            const { title, category, content } = action.payload;
            const newBlog = {
                id: nanoid(),
                title,
                category,
                content,
                like: false,
            };
            state.blogs.push(newBlog);
        },
       deleteBlog: (state, action) => {
        const blogId = action.payload;
        state.blogs = state.blogs.filter((blog) => blog.id !== blogId);
       },
       updateBlog: (state, action) => {
        const { id, title, category, content } = action.payload;
        const blogToEdit = state.blogs.find(blog => blog.id === id);
        if(blogToEdit) {
            blogToEdit.title = title;
            blogToEdit.category = category;
            blogToEdit.content = content;
        }
       },
       likeBlog: (state, action) => {
        const { id } = action.payload;
        const blogToLike = state.blogs.find(blog => blog.id === id );
        if(blogToLike) {
            if(blogToLike.like === true) {
                blogToLike.like = false;
            }
            else {
                blogToLike.like = true;
            }
        }
       }
    }
})



export const {addBlog, deleteBlog, updateBlog, likeBlog} = NewBlogSlice.actions;
export default NewBlogSlice.reducer;
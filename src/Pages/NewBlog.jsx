import React, { useState } from "react";
import { addBlog } from "../redux/Slices/NewBlogSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewBlog = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const addHandler = () => {
        if (!title || !category || !content) {
            toast.error("Fill all details", {
                position: "top-right",
                autoClose: 200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            dispatch(addBlog({ title, category, content }));
            toast.success("Blog added successfully", {
                position: "top-right",
                autoClose: 200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTitle("");
            setCategory("");
            setContent("");
        }
    }

    const clearHandler = () => {
        setTitle("");
        setCategory("");
        setContent("");
    }

    return (
        <div className="bg-gradient-to-r from-purple-200 to-pink-300 min-h-screen items-center justify-center">
            
            <div className="bg-white rounded-lg p-8 mb-8">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">
                    Add a New Blog
                </h1>
                <div className="border-dashed border-t-2 border-indigo-400 w-64 mx-auto"></div>
            </div>

            <div className="bg-white  p-8 rounded-lg shadow-md w-96 space-y-4 items-center justify-center">
                <form>
                    
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium text-gray-600">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={onChangeTitle}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none
                                        focus:ring focus:ring-purple-200"/>
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-lg font-medium text-gray-600">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={category}
                            onChange={onChangeCategory}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none
                                        focus:ring focus:ring-purple-200"/>
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-lg font-medium text-gray-600">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={content}
                            onChange={onChangeContent}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none 
                                        focus:ring focus:ring-purple-200"
                            rows="5">
                        </textarea>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            onClick={addHandler}
                            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300">
                            Add Blog
                        </button>
                        <button
                            type="button"
                            onClick={clearHandler}
                            className="px-4 py-2 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-100 transition duration-300">
                            Clear
                        </button>
                    </div>
                    
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default NewBlog;

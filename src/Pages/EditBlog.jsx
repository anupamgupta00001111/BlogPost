import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../redux/Slices/NewBlogSlice";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.newBlog.blogs);
    const blogToEdit = blogs.find(blog => blog.id === id);

    const [title, setTitle] = useState(blogToEdit?.title || "");
    const [category, setCategory] = useState(blogToEdit?.category || "");
    const [content, setContent] = useState(blogToEdit?.content || "");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const editHandler = () => {
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
            dispatch(updateBlog({ id, title, category, content }));
            toast.success("Blog Edited successfully", {
                position: "top-right",
                autoClose: 200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate(`/fullblog/${id}`);
        }
    }

    const cancelHandler = () => {
        navigate("/");
    }

    return (
        <div className="bg-gradient-to-r from-yellow-200 to-green-300 min-h-screen justify-center items-center">

            <div className="bg-white rounded-lg p-4 mb-6">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">
                    Edit Blog
                </h1>
                <div className="border-dashed border-t-2 border-indigo-400 w-48 mx-auto"></div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <form>

                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-1">
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

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-600 mb-1">
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

                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-600 mb-1">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={content}
                            onChange={onChangeContent}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none
                                        focus:ring focus:ring-purple-200">
                         </textarea>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            onClick={editHandler}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                            Save Edit
                        </button>
                        <button
                            type="button"
                            onClick={cancelHandler}
                            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-100 transition duration-300">
                            Cancel
                        </button>
                    </div>

                </form>
                <ToastContainer />
            </div>

        </div>
    );
};

export default EditBlog;

import React from "react";
import { NavLink } from "react-router-dom";
import { deleteBlog } from "../redux/Slices/NewBlogSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";

const Blog = ({blog}) => {

    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteBlog(blog.id));
        toast.success("Blog deleted successfully", {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style:{ right: '10px', top: '10px', transform: 'translateY(50%)' }
        });
    }
    
    return (
        <div className="relative bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform
                        transition-transform duration-300 hover:scale-105">
            <NavLink to={`/fullblog/${blog.id}`} >
                <div className="text-xl font-semibold text-indigo-600 mb-2">
                     {blog.title}
                </div>
                <div className="text-gray-600 mb-2">
                    <span className="text-lg font-medium">{blog.category}</span>
                </div>
                <div className="text-gray-800">
                    {
                        blog.content.length > 100 ?
                        (blog.content.substr(0, 100)) + "..." :
                        (blog.content)
                    }
                </div>
            </NavLink>
            <div className="absolute bottom-2 right-2">
                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600
                                    transition duration-300" type="button" onClick={deleteHandler}>
                        Delete
                </button>
            </div>
        </div>
    )
}

export default Blog;

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import LikedBlogContext from "../Context/LikedBlogContext";


const FullBlog = () => {
    const { id } = useParams();
    const blogs = useSelector((state) => state.newBlog.blogs);
    const blog = blogs.find((blog) => blog.id === id);

    const like = useContext(LikedBlogContext);

    if (!blog) {
        return (

            <div className="flex justify-center items-center h-40 text-black">
                <p className="text-2xl font-bold border-2 border-dashed border-indigo-400 p-4 rounded">
                    No Blog Found
                </p>
            </div>
        );
    }

    const likeHandler = () => {
        like.likeHandlercontext(id);

        console.log(blog.like);

        if(blog.like) {
            toast.warning("Like is removed", {
                position: "top-center",
                autoClose: 200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        else {
            toast.success("You Liked the blog", {
                position: "top-center",
                autoClose: 200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        console.log(blog.like);
    }

    return (
        <div className="bg-gradient-to-r from-purple-300 to-pink-400 min-h-screen p-4 text-white flex flex-col 
                        justify-center items-center">
            
            <div className="bg-white rounded-lg p-4 mb-6">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">
                    {blog.title}
                </h1>
                <div className="border-dashed border-t-2 border-indigo-400 w-160 mx-auto"></div>
            </div>

            <div className="bg-black bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <div className="text-lg font-bold mb-2">
                    Category: {blog.category}
                </div>
                <hr className="border-t-2 border-white my-4" />

                <p className="text-xl leading-relaxed mb-6">
                    {blog.content}
                </p>
                <div className="flex justify-end">
                    <NavLink to={`/edit/${blog.id}`}>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                            Edit
                        </button>
                    </NavLink>
                </div>
                <div>
                    <button onClick={likeHandler}>
                        {
                            blog.like ?
                            (<FcLike fontSize="3rem" />) :
                            (<FcLikePlaceholder fontSize="3rem" />)
                        }
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FullBlog;

import React from "react";
import { useSelector } from "react-redux";
import Blog from "../components/Blog";
import { ToastContainer } from "react-toastify";

const Home = () => {
    const blogs = useSelector((state) => state.newBlog.blogs);

    return (
        <div className="bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-lg p-4 mb-6">
                    <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">
                        📚 List of Blogs 📚
                    </h1>
                    <div className="border-dashed border-t-2 border-indigo-400 w-64 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.length > 0 ?
                    ( blogs.map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                        ))) :
                        ( <div className="flex justify-center items-center h-40 text-black">
                            <p className="text-2xl font-bold border-2 border-dashed border-indigo-400 p-4 rounded">
                                No Blog Found
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Home;

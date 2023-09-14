import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <nav className="flex justify-between items-center h-24 bg-gradient-to-r from-blue-500 to-indigo-700">
                <NavLink to="/">
                    <div className="flex items-center font-semibold text-white ml-8 space-x-4">
                        <button className="bg-transparent hover:bg-white hover:text-blue-500 text-white
                                        font-semibold py-2 px-4 border border-white rounded transition duration-300">
                            Home
                        </button>
                    </div>
                </NavLink>

                <div className="flex items-center font-semibold text-white text-xl">
                    <p>BLOG APPLICATION</p>
                </div>

                <NavLink to="/new">
                    <div className="flex items-center font-semibold text-white mr-8 space-x-4">
                        <button className="bg-transparent hover:bg-white hover:text-blue-500 text-white font-semibold
                                            py-2 px-4 border border-white rounded transition duration-300">
                            New Blog
                        </button>
                    </div>
                </NavLink>

            </nav>
            
        </div>
    );
};

export default Navbar;

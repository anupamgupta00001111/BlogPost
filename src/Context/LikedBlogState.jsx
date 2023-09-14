import React from "react";
import LikedBlogContext from "./LikedBlogContext";
import { useDispatch } from "react-redux";
import { likeBlog } from "../redux/Slices/NewBlogSlice";

const LikedBlogState = (props) => {

    const dispatch = useDispatch();

    function likeHandlercontext (id) {
        dispatch(likeBlog({id}));
    }
    return (
        <LikedBlogContext.Provider value={{likeHandlercontext}}>
            {props.children}
        </LikedBlogContext.Provider>
    )
}

export default LikedBlogState;
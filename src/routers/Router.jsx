import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import Posts from "../pages/Posts";
import PostDetails from "../pages/PostDetails";


const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:postId" element={<PostDetails />} />
                <Route path="*" element={<div><h4>404 Page Not Found!</h4></div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Friends from "./Friends/Friends";
import Home from "./Home/Home";
import Test from "./Test/Test";


const Content = () => {
    return (
        <div>

            <Routes>
                <Route path = '/' element = {<Home/>}/> 
                <Route path = '/friends' element = {<Friends/>}/> 
                <Route path = '/test' element = {<Test/>}/> 

            </Routes>

        </div>
    )
}

export default Content;
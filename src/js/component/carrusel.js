import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Cards } from "./card";

export const Carrusel =()=>{
    return(
       <div className="container carrusel">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
       </div>
    )
}


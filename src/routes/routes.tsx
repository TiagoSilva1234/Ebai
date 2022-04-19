import React,{useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.tsx";
import Home from "../components/Home/index.tsx";
import Casa from "../components/casa/index.tsx"
import Comida from "../components/products/index.tsx"
import Products from "../components/categorys/index.tsx"
import Single from '../components/single/index.tsx'
import {PostContext,GlobalContext} from '../utils/context/context.tsx'

const RoutesApp = () => {

  

  return (
    <PostContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/product"element={<Single/>}/>
          <Route  path="/Products" element={<Comida />} />
          <Route  path="/Categorys" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </PostContext>
  );
};


export  default RoutesApp;
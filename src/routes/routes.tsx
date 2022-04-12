import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.tsx";
import Home from "../components/Home/index.tsx";
import Casa from "../components/casa/index.tsx"
import Comida from "../components/comida/index.tsx"
import Products from "../components/products/index.tsx"

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Casa" element={<Casa />} />
          <Route  path="/Comida" element={<Comida />} />
          <Route  path="/Products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export  default RoutesApp;
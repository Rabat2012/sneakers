// import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import AllProducts from "./components/AllProducts/AllProducts";
import Adidas from "./components/Brand/Adidas";
import Asics from "./components/Brand/Asics";
import Brands from "./components/Brand/Brands";
import Nike from "./components/Brand/Nike";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/register-success" element={<RegisterSuccess />} />

      <Route path="/brands" element={<Brands />} />

      <Route path="/add" element={<AddProduct />} />

      <Route path="/all-products" element={<AllProducts />} />

      <Route path="/adidas" element={<Adidas />} />

      <Route path="/asics" element={<Asics />} />

      <Route path="/nike" element={<Nike />} />
    </Routes>
  );
};

export default Routing;

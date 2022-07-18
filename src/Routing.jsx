// import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Adidas from "./components/Brands/Adidas";
import Asics from "./components/Brands/Asics";
import Brands from "./components/Brands/Brands";
import Nike from "./components/Brands/Nike";
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

      <Route path="/adidas" element={<Adidas />} />

      <Route path="/asics" element={<Asics />} />

      <Route path="/nike" element={<Nike />} />
    </Routes>
  );
};

export default Routing;

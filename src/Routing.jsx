import React from "react";
import { Route, Routes } from "react-router-dom";
import Brands from "./components/Brands/Brands";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/brands" element={<Brands />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;

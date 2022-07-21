// import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
// import AllProducts from "./components/AllProducts/AllProducts";
import Adidas from "./components/Brand/Adidas";
import Asics from "./components/Brand/Asics";
import Brands from "./components/Brand/Brands";
import Nike from "./components/Brand/Nike";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";
import Fav from "./components/Fav/Fav";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import ProductsList from "./components/ProductsList/ProductsList";
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

      <Route path="/fav" element={<Fav />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/edit/:id" element={<EditProduct />} />

      <Route path="/products/:id" element={<Details />} />

      <Route path="/products" element={<ProductsList />} />

      <Route path="/adidas" element={<Adidas />} />

      <Route path="/asics" element={<Asics />} />

      <Route path="/nike" element={<Nike />} />
    </Routes>
  );
};

export default Routing;

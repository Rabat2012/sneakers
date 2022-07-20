import React, { useContext, useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, checkAuth, loading, handleLogout } =
    useContext(authContext);
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__nav_product-list">
            <h3
              onClick={() => navigate("/brands")}
              className="header__nav_link">
              Brands
            </h3>
            <h3
              onClick={() => navigate("/all-products")}
              className="header__nav_link">
              All Products
            </h3>
          </div>
          <img
            onClick={() => navigate("/")}
            className="header__nav_img"
            src={logo}
            alt="logo"
          />

          {currentUser ? (
            <div>
              <button onClick={() => navigate("/add")}>Add product</button>
              <button
                variant="contained"
                // onClick={() => navigate("/favorites")}
              >
                Favorites
              </button>
              <h1>{currentUser}</h1>
              <button onClick={() => handleLogout(navigate)}>Logout</button>
            </div>
          ) : (
            <div className="account">
              <h3
                onClick={() => navigate("/login")}
                className="header__nav_link">
                Login
              </h3>

              <h3
                onClick={() => navigate("/register")}
                className="header__nav_link">
                Register
              </h3>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

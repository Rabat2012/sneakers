import React, { useContext, useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";
import { IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AddShoppingCart } from "@mui/icons-material";

const Header = item => {
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
          {currentUser ? (
            <div className="header__nav_product-list">
              <h3
                onClick={() => navigate("/brands")}
                className="header__nav_link">
                Brands
              </h3>
              <h3
                onClick={() => navigate("/products")}
                className="header__nav_link">
                Products
              </h3>
            </div>
          ) : null}

          <img
            onClick={() => navigate("/")}
            className="header__nav_img"
            src={logo}
            alt="logo"
          />

          {currentUser ? (
            <div>
              <div>
                <IconButton
                  onClick={() => navigate("/fav")}
                  aria-label="add to shopping cart">
                  <BookmarkIcon />
                </IconButton>
                <IconButton
                  onClick={() => navigate("/cart")}
                  aria-label="add to shopping cart">
                  <AddShoppingCart />
                </IconButton>
              </div>
              {item.author ? (
                <div>
                  <h4 onClick={() => navigate("/add")}>Add product</h4>
                </div>
              ) : null}

              <h4>{currentUser}</h4>
              <h4 onClick={() => handleLogout(navigate)}>Logout</h4>
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

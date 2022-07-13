import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header">
        <nav className="header__nav">
          <h3 onClick={() => navigate("/brands")} className="header__nav_link">
            Brands
          </h3>
          <img
            onClick={() => navigate("/")}
            className="header__nav_img"
            src={logo}
            alt="logo"
          />
          <div className="account">
            <h3 onClick={() => navigate("/login")} className="header__nav_link">
              Login
            </h3>

            <h3
              onClick={() => navigate("/register")}
              className="header__nav_link">
              Register
            </h3>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

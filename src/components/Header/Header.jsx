import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="header__nav">
          <h3 className="header__nav_link">Brands</h3>
          <img className="header__nav_img" src={logo} alt="logo" />
          <h3 className="header__nav_link">Account</h3>
        </nav>
      </header>
    </div>
  );
};

export default Header;

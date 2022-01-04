import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <img id="logo" className="image" src={logo} alt="logo" />
      <ul id="navtabs">
        <Link id="link" style={{ textDecoration: "none" }} to="/profile">
          <li>My Prop</li>
        </Link>
        <Link id="link" style={{ textDecoration: "none" }} to="/search">
          <li>Swap!</li>
        </Link>
        <Link id="link" style={{ textDecoration: "none" }} to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

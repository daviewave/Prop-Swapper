import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <img
        className="image"
        src="client/public/Screen_Shot_2022-01-03_at_1.25.26_PM-removebg-preview.png"
        alt="logo"
      />
      <ul id="navtabs">
        <Link style={{ textDecoration: "none" }} to="/profile">
          <li>My Prop</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/search">
          <li>Swap!</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

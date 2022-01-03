import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h1>PROP SWAP</h1>
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

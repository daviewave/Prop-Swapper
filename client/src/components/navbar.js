import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h1>PROP SWAP</h1>
      <ul id="navtabs">
        <Link to="/profile">
          <li>My Prop</li>
        </Link>
        <Link to="/search">
          <li>Swap!</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

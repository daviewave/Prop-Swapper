import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>PROP SWAP</h1>
      <ul>
        <Link to="/profile">
          <li>My Profile</li>
        </Link>
        <Link to="/search">
          <li>Search Properties</li>
        </Link>
        <Link to="/login">
          <li>Login OR Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Auth from "../utils/auth";

import { Link } from "react-router-dom";

const Footer = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <footer id="footer">
      <Link id="link" style={{ textDecoration: "none" }} to="/">
        About
      </Link>
      {Auth.loggedIn ? <button onClick={logout}>logout</button> : <></>}
    </footer>
  );
};

export default Footer;

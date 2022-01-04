import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <Link id="link" style={{ textDecoration: "none" }} to="/">
        About
      </Link>
    </footer>
  );
};

export default Footer;

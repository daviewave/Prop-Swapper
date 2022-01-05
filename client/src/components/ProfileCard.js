import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div>
      <Container id="profile-container">
        <h1>profile</h1>
        <h2>Address: 44 Penny Lane</h2>
        <h2>City: New York City</h2>
        <h2>State: NY</h2>
        <h2>Zip: 10013</h2>
        <h2># of Bedrooms: 2</h2>
        <h2>email: propswap@propswap.com</h2>

        <Link
          id="body-link"
          style={{ textDecoration: "none" }}
          to="/updateinfo"
        >
          Update Info
        </Link>
      </Container>
    </div>
  );
};

export default ProfileCard;

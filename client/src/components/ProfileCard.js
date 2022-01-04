import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div>
      <Container>
        <h1>profile</h1>
        <h2>Address: </h2>
        <h2>City: </h2>
        <h2>State: </h2>
        <h2>Zip: </h2>
        <h2># of Bedrooms: </h2>
        <h2>email: </h2>

        <Link style={{ textDecoration: "none" }} to="/updateinfo">
          Update Info
        </Link>
      </Container>
    </div>
  );
};

export default ProfileCard;

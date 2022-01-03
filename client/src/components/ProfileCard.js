import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div>
      <Container>
        <h1>profile</h1>
        <Link to="/updateinfo">Update Info</Link>
      </Container>
    </div>
  );
};

export default ProfileCard;

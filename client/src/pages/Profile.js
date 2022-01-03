import { Container } from "@mui/material";
import React from "react";
import InfoForm from "../components/InfoForm";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  return (
    <Container>
      <InfoForm />
      <ProfileCard />
    </Container>
  );
};

export default Profile;

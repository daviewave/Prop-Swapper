import { Container } from "@mui/material";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import { useUserContext, UserProvider } from "../utils/GlobalState";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams, Navigate } from "react-router-dom";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  return (
    <Container>
      <ProfileCard />
    </Container>
  );
};

export default Profile;

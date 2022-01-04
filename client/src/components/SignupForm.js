import React, { useState } from "react";
import Container from "@mui/material/Container";
// Here we import a helper function that will check if the email is valid
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import { useUserContext } from "../utils/GlobalState";
import { UPDATE_CURRENTUSER } from "../utils/actions";

const SignupForm = () => {
  const [, dispatch] = useUserContext();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await addUser({
        variables: { ...formState },
      });

      Auth.login(user.addUser.token);

      if (user) {
        dispatch({
          type: UPDATE_CURRENTUSER,
          currentUser: user,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container id="form-container" maxWidth="xs">
      <div>
        <p>Sign Up</p>
        {data ? (
          <p>
            Success! You may now head <Link to="/profile">to your profile</Link>
          </p>
        ) : (
          <form className="form">
            <input
              value={formState.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="email"
            />
            <input
              value={formState.username}
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="username"
            />
            <input
              value={formState.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <button id="btn" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        )}

        {error && <div>{error.message}</div>}
      </div>
    </Container>
  );
};

export default SignupForm;

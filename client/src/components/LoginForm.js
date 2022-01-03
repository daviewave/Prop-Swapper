import React, { useState } from "react";
import Container from "@mui/material/Container";
// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = async (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Please Enter a Valid Email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.

    try {
      const { data } = await login({
        variables: { email, password },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values

    //THIS IS WHERE THE MUTATION WILL GO FOR LOGIN
    setPassword("");
    setEmail("");
  };

  return (
    <Container id="form-container" maxWidth="xs">
      <div>
        <p>Login!</p>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="form">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />

            <input
              value={password}
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
            />
            <button id="btn" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        )}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>

      <p id="login-form-bottom">
        Don't have an account with us?{" "}
        <span>
          {" "}
          <Link id="link" style={{ textDecoration: "none" }} to="/signup">
            Sign Up!
          </Link>
        </span>{" "}
      </p>
    </Container>
  );
};

export default LoginForm;

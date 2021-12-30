import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";

const SignupForm = () => {
  return (
    <Container id="form-container" maxWidth="xs">
      <h1>SIGN UP FORM!</h1>
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Username"
        variant="standard"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Email"
        variant="standard"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        variant="standard"
      />

      <button>Submit</button>
    </Container>
  );
};

export default SignupForm;

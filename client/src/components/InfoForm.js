import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const InfoForm = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "address") {
      setAddress(inputValue);
    } else if (inputType === "city") {
      setCity(inputValue);
    } else if (inputType === "state") {
      setState(inputValue);
    } else if (inputType === "bedrooms") {
      setBedrooms(inputValue);
    } else {
      setDescription(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    console.log(address);

    if (address) {
      setSuccessMessage("Profile Updated");
    }

    //THIS IS WHERE THE MUTATION WILL GO
    setAddress("");
    setCity("");
    setState("");
    setBedrooms("");
    setDescription("");
  };
  return (
    <Container id="info-container" maxWidth="xs">
      <div>
        <p>UPDATE YOUR INFO TO START SWAPPING</p>
        <form id="info-form">
          <h1>Address:</h1>
          <input
            value={address}
            name="address"
            onChange={handleInputChange}
            type="email"
            placeholder="Address"
          />
          <h1>City:</h1>
          <input
            value={city}
            name="city"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <h1>State:</h1>
          <input
            value={state}
            name="state"
            onChange={handleInputChange}
            type="text"
            placeholder="State"
          />
          <h1>Bedrooms:</h1>
          <input
            value={bedrooms}
            name="bedrooms"
            onChange={handleInputChange}
            type="text"
            placeholder="# of Bedrooms"
          />
          <h1>Description:</h1>
          <input
            value={description}
            name="description"
            onChange={handleInputChange}
            type="text"
            placeholder="Description"
          />
          <button class="btn" type="button" onClick={handleFormSubmit}>
            Update!
          </button>
        </form>
        {successMessage && (
          <div>
            <p>{successMessage}</p>
          </div>
        )}
      </div>
      <Link id="body-link" style={{ textDecoration: "none" }} to="/profile">
        Back To Profile
      </Link>
    </Container>
  );
};

export default InfoForm;

import React from "react";
import { Container } from "@mui/material";

const Search = () => {
  return (
    <Container id="about-container">
      <div>
        <h1>Search for potential swaps</h1>
        <h2>Select a state:</h2>
        <form className="form">
          <select id="states" name="states">
            <option value="NY">NY</option>
            <option value="FL">FL</option>
            <option value="IL">IL</option>
            <option value="TN">TN</option>
            <button id="btn" type="button">
              Submit
            </button>
          </select>
        </form>
      </div>
    </Container>
  );
};

export default Search;

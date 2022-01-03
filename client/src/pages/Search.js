import React from "react";
import { Container } from "@mui/material";

const Search = () => {
  return (
    <Container>
      <div>
        <h1>Start searching for your next swap!</h1>
        <form className="form">
          <select name="states">
            <option value="NY">NY</option>
            <option value="FL">FL</option>
            <option value="IL">IL</option>
            <option value="TN">TN</option>
          </select>
        </form>
      </div>
    </Container>
  );
};

export default Search;

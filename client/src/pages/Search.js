import React from "react";
import { useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import { QUERY_USERS } from "../utils/queries";
import { useState } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Search = () => {
  const [location, setLocation] = useState("");
  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  const updateLocation = (e) => {
    e.preventDefault();
    const { target } = e;

    const inputValue = target.value;

    setLocation(inputValue);

    console.log(location);
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Container id="about-container">
            <div>
              <h1>Search for potential swaps</h1>
              <h2>Select a state:</h2>
              <form className="form">
                <select
                  type="states"
                  id="states"
                  name="states"
                  onChange={updateLocation}
                >
                  <option value="NY">NY</option>
                  <option value="FL">FL</option>
                  <option value="IL">IL</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="WY">WY</option>
                  <option value="TN">TN</option>
                </select>
              </form>
            </div>
          </Container>

          <Container>
            <div>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <h3>SWAPS:</h3>

                  {users &&
                    users.map((user) => {
                      if (location === user.property.state) {
                        return (
                          <div id="info-container" key={user._id}>
                            <h4>Name: {user.username}</h4>
                            <h4>Address: {user.property.address}</h4>
                            <h4>City: {user.property.city}</h4>
                            <h4>State: {user.property.state}</h4>
                            <h4>
                              Number of bedrooms: {user.property.bedrooms}
                            </h4>
                            <h4>Contact: {user.email}</h4>
                          </div>
                        );
                      }
                    })}
                </div>
              )}
            </div>
          </Container>
        </>
      ) : (
        <Container id="form-container">
          <p>
            You need to be logged in to search for potential swaps. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        </Container>
      )}
    </div>
  );
};

export default Search;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Signup from "./pages/Signup";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <div id="body">
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Signup from "./pages/Signup";
import Info from "./pages/Info";
import About from "./pages/About";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
            <Route exact path="/updateinfo" element={<Info />} />
            <Route exact path="/" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;

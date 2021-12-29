import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

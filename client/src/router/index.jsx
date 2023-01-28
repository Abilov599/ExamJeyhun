import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/add-page";
import Details from "../pages/details-page";
import Home from "../pages/home";
import Wishlist from "../pages/wishlist";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-page" element={<AddPage />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default Routing;

import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="site-logo">
          <h1>Dazzling Demo</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-page">Add Page</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/languages">Languages</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

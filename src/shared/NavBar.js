import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Navbar = () => (
  <header>
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/order">Order</Link>
  </header>
);

export default Navbar;

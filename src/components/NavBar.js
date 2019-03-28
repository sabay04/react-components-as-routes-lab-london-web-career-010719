import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" style={link}>
        Home
      </NavLink>
      <NavLink to="/movies" style={link}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={link}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={link}>
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;

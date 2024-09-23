import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation-flex-wrapper">
      <div className="logo-home-wrapper">
        {" "}
        <h1>
          <NavLink to="/">Mindful Moments</NavLink>
        </h1>
      </div>
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/journal">Journal</NavLink>
        </li>
      </ul>
    </div>
  );
}

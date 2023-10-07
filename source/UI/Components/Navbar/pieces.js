import React from "react";
import { NavLink } from "react-router-dom";

export const renderNavLink = ({ path, label }, index) => (
  <NavLink key={index} to={path}>
    {label}
  </NavLink>
);

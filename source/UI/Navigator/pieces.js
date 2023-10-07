import React from "react";
import { Route } from "react-router-dom";

export const renderRoute = ({ path, element }) => (
  <Route key={path} {...{ path, element }} />
);

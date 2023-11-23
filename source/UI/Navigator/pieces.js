import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const redirect = ({ userSession, privateRoute, defaultPath, element }) => {
  if ((!userSession && privateRoute) || (userSession && !privateRoute)) {
    return <Navigate to={defaultPath} replace={true} />;
  } else {
    return element;
  }
};

export const renderRoute = (
  { defaultPath, privateRoute, userSession },
  { path, element }
) => (
  <Route
    key={path}
    path={path}
    element={redirect({ userSession, privateRoute, element, defaultPath })}
  />
);

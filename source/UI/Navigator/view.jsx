import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Navigate, Router, Routes } from 'react-router-dom';

import { Navbar } from 'Components';

import routes from './routes';
import { renderRoute } from './pieces';

const Navigator = ({ userSession = false }) => {
  const defaultPath = userSession ? routes.private[0]?.path : routes.public[0]?.path;

  return (
    <BrowserRouter>
      {userSession && <Navbar />}

      <Routes>
        {routes.public.map(
          renderRoute.bind(null, { userSession, privateRoute: false, defaultPath })
        )}

        {routes.private.map(
          renderRoute.bind(null, { userSession, privateRoute: true, defaultPath })
        )}
      </Routes>
    </BrowserRouter>
  );
};

Navigator.propTypes = {
  userSession: PropTypes.bool
};

export default Navigator;

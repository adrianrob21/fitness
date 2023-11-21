import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from './../Icon';

export const renderNavLink = ({ currentLocation = '' }, { path, icon = '' }, index) => (
  <NavLink key={index} className={'text-white'} to={path}>
    <Icon
      iconName={icon}
      color={currentLocation === path ? 'fill-primary-900' : 'fill-white'}
    />
  </NavLink>
);

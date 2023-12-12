import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { mock } from 'Helpers';
import routes from 'Navigator/routes';

import Icon from './../Icon';
import { renderNavLink } from './pieces';

const classes = {
  mobileContainer:
    'flex z-10 bg-darkGray items-center fixed bottom-0 w-full p-2 justify-between',
  mdContainer: 'md:left-0 md: md:flex-col md:h-full md:w-20',
  mobileIconsContainer: 'flex space-x-6 mr-5 ml-5',
  mdIconsContainer: 'md:flex-col md:space-x-0 md:h-1/3 md:space-y-16'
};

const Navbar = ({
  getProfilePicture = mock,
  logout = mock,
  profilePicture = '',
  userId = ''
}) => {
  const location = useLocation();

  console.log('profilePicture', profilePicture);

  useEffect(() => {
    if (userId) getProfilePicture(userId);
  }, [getProfilePicture]);

  return (
    <div className={`${classes.mobileContainer} ${classes.mdContainer}`}>
      <img
        className={'h-14 w-14 rounded-full object-cover md:mt-10'}
        src={profilePicture}
      />

      <div className={`${classes.mobileIconsContainer} ${classes.mdIconsContainer}`}>
        {routes.private.map(
          renderNavLink.bind(null, { currentLocation: location?.pathname })
        )}
      </div>

      <div onClick={logout} className={'hover:cursor-pointer md:mb-20'}>
        <Icon iconName={'Exit'} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  getProfilePicture: PropTypes.func,
  logout: PropTypes.func,
  profilePicture: PropTypes.string,
  userId: PropTypes.string
};

export default Navbar;

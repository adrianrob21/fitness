import PropTypes from 'prop-types';

import { classNames } from 'Helpers';

const Card = ({
  background = 'bg-darkGray',
  centerAll = false,
  children = null,
  orientation = 'col'
}) => (
  <div
    className={classNames(
      `flex flex-${orientation} w-full h-screen overflow-scroll flex-1 p-2 md:p-16 ${background} rounded-3xl`,
      centerAll && 'justify-center items-center'
    )}>
    {children}
  </div>
);

Card.propTypes = {
  background: PropTypes.string,
  centerAll: PropTypes.bool,
  children: PropTypes.any,
  orientation: PropTypes.string
};

export default Card;

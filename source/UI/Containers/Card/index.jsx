import PropTypes from 'prop-types';

const Card = ({ children = null, background = 'bg-darkGray' }) => (
  <div className={`w-full h-full flex-1 p-16 ${background} rounded-3xl`}>{children}</div>
);

Card.propTypes = {
  background: PropTypes.string,
  children: PropTypes.any
};

export default Card;

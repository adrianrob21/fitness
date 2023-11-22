import PropTypes from 'prop-types';

const Card = ({ children = null }) => (
  <div className={'bg-darkGray w-fit p-16 rounded-3xl'}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.any
};

export default Card;

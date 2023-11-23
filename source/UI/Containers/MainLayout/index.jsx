import PropTypes from 'prop-types';

const classnames = {
  mobile: 'flex-col pl-8 space-y-8 mb-32 pt-8',
  md: 'md:flex-row md:pl-32 md:mb-8 md:pt-16 md:space-y-0 md:space-x-8'
};

const MainLayout = ({ children = null }) => (
  <div
    className={`h-full items-center pr-8 w-full flex ${classnames.mobile} ${classnames.md}`}>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.any
};

export default MainLayout;

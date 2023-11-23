import PropTypes from 'prop-types';

const ContentContainer = ({ children = null, width = '' }) => (
  <div className={`flex flex-col h-full w-${width} space-y-4`}>{children}</div>
);

ContentContainer.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string
};

export default ContentContainer;

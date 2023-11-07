import PropTypes from 'prop-types';

import { WHITE_BOLD_TEXT } from 'Constants';

const PageHeader = ({ title = '', subtitle = '' }) => (
  <div className={'w-full flex flex-col items-center space-y-2 justify-center'}>
    <h1 className={`${WHITE_BOLD_TEXT} text-5xl`}>{title}</h1>
    <h3 className={`${WHITE_BOLD_TEXT} text-sm`}>{subtitle}</h3>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default PageHeader;

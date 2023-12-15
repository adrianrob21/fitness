import PropTypes from 'prop-types';

import { mock } from 'Helpers';

import { renderTabButton } from './pieces';

const Tabs = ({
  selectedTab = '',
  tabs = [],
  updateProps = mock,
  useValueAsLabel = false
}) => (
  <div className={'flex space-x-10 w-full md:w-2/3'}>
    {tabs.map(renderTabButton.bind(null, { selectedTab, updateProps, useValueAsLabel }))}
  </div>
);

Tabs.propTypes = {
  selectedTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tabs: PropTypes.array,
  updateProps: PropTypes.func,
  useValueAsLabel: PropTypes.bool
};

export default Tabs;

import PropTypes from 'prop-types';

import { mock } from 'Helpers';

import { renderTabButton } from './pieces';

const Tabs = ({ selectedTab = '', tabs = [], updateProps = mock }) => (
  <div className={'flex space-x-10 w-full md:w-2/3'}>
    {tabs.map(renderTabButton.bind(null, { selectedTab, updateProps }))}
  </div>
);

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  tabs: PropTypes.array,
  updateProps: PropTypes.func
};

export default Tabs;

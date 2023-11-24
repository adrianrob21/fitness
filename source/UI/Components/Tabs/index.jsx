import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import I18n from 'Translations';

import Button from '../Button';

const Tabs = ({ selectedTab = '', tabs = [], updateProps = mock }) => (
  <div className={'flex space-x-10 w-2/3'}>
    {tabs.map(({ value }) => (
      <Button
        selected={selectedTab === value}
        label={I18n.t(`planning:tabs.${value}Workout`)}
        onClick={updateProps.bind(null, { selectedTab: value })}
        variant={'tab'}
      />
    ))}
  </div>
);

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  tabs: PropTypes.array,
  updateProps: PropTypes.func
};

export default Tabs;

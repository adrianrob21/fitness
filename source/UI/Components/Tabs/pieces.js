import I18n from 'Translations';

import Button from '../Button';

export const renderTabButton = ({ selectedTab, updateProps }, { value }) => (
  <Button
    key={value}
    selected={selectedTab === value}
    label={I18n.t(`planning:tabs.${value}Workout`)}
    onClick={updateProps.bind(null, { selectedTab: value })}
    variant={'tab'}
  />
);

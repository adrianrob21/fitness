import I18n from 'Translations';

import Button from '../Button';

export const renderTabButton = (
  { selectedTab, updateProps, useValueAsLabel },
  { value, label = '' }
) => {
  return (
    <Button
      key={value}
      selected={selectedTab === value}
      label={!label ? I18n.t(`planning:tabs.${value}Workout`) : label}
      onClick={updateProps.bind(null, { selectedTab: value })}
      variant={'tab'}
    />
  );
};

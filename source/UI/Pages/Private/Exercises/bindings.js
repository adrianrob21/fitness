import I18n from 'Translations';
import { formatDate, mock } from 'Helpers';

export const createTabs = ({ length }) =>
  Array.from(Array(length)).map((_item, index) => ({
    value: index,
    label: I18n.t('trainings:trainingNumber', { count: index + 1 })
  }));

export const onDateChange = ({ updateTrainingsProps = mock }, date) => {
  updateTrainingsProps({ selectedDate: formatDate({ date }), selectedTab: 0 });
};

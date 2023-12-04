import I18n from 'Translations';
import { formatDate } from 'Helpers';

export const createTabs = ({ length }) =>
  Array.from(Array(length)).map((_item, index) => ({
    value: index,
    label: I18n.t('trainings:trainingNumber', { count: index + 1 })
  }));

export const onDateChange = ({ getDayWorkouts }, date) => {
  getDayWorkouts({ selectedDate: formatDate({ date }) });
};

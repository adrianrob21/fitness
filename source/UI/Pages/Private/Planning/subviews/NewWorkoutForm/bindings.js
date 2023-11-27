import moment from 'moment';

import { formatDate } from 'Helpers';

export const onDateChange = ({ updatePlanningProps }, date) => {
  updatePlanningProps({ selectedDate: formatDate({ date }) });
};

export const disableDays = ({ date }) =>
  moment(date) < moment() && formatDate({ date }) !== formatDate({ date: moment() });

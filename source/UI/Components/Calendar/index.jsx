import './style.css';
import PropTypes from 'prop-types';
import ReactCalendar from 'react-calendar';

import { mock } from 'Helpers';

import { passDate } from './bindings';

const Calendar = ({ onChange = mock, disableDays = mock }) => (
  <ReactCalendar
    defaultActiveStartDate={new Date()}
    className={'bg-darkGray text-white w-full lg:w-[350px]'}
    calendarType={'US'}
    tileDisabled={passDate.bind(null, { receiver: disableDays })}
    onChange={passDate.bind(null, { receiver: onChange })}
    locale={'en-US'}
  />
);

Calendar.propTypes = {
  disableDays: PropTypes.func,
  onChange: PropTypes.func
};

export default Calendar;

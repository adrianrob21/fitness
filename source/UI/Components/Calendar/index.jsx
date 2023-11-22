import './style.css';
import ReactCalendar from 'react-calendar';

const Calendar = () => (
  <ReactCalendar
    defaultActiveStartDate={new Date()}
    className={'bg-darkGray text-white mt-0'}
    calendarType={'US'}
    locale={'en-US'}
  />
);

export default Calendar;

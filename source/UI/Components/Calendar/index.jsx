import './style.css';
import ReactCalendar from 'react-calendar';

const Calendar = () => (
  <ReactCalendar
    defaultActiveStartDate={new Date()}
    className={'bg-darkGray text-white'}
    calendarType={'US'}
    locale={'en-US'}
  />
);

export default Calendar;

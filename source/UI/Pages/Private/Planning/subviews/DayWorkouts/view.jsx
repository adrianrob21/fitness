import moment from 'moment';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { formatDate, mock } from 'Helpers';
import { Button, Calendar } from 'Components';

import { NewWorkoutForm } from './subviews';
import { disableDays, onDateChange } from './bindings';

const DayWorkouts = ({ planningState = {}, updatePlanningProps = mock }) => {
  useEffect(() => {
    if (moment() > moment(selectedDate) || !selectedDate) {
      updatePlanningProps({ selectedDate: formatDate({ date: moment() }) });
    }
  }, []);

  const { selectedDate, showForm } = planningState;

  return (
    <div className={'w-full items-start flex flex-wrap md:flex-nowrap'}>
      <div>
        {showForm ? (
          <div className={'w-1/2'} />
        ) : (
          <Calendar
            disableDays={disableDays}
            onChange={onDateChange?.bind(null, { updatePlanningProps })}
          />
        )}
      </div>
      <div className={'flex w-full justify-center h-full items-center'}>
        {showForm ? (
          <NewWorkoutForm />
        ) : (
          <Button
            label={'Plan a workout'}
            fullWidth={false}
            onClick={updatePlanningProps.bind(null, {
              showForm: true
            })}
          />
        )}
      </div>
    </div>
  );
};
DayWorkouts.propTypes = {
  planningState: PropTypes.object,
  updatePlanningProps: PropTypes.func
};

export default DayWorkouts;

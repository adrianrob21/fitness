import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { WORKOUTS } from 'Repos';
import { formatDate, mock } from 'Helpers';

import { EmptyState } from './subviews';

const PlannedWorkouts = ({ getDocuments = mock, plannedWorkouts = [] }) => {
  useEffect(() => {
    getDocuments({ collectionPath: WORKOUTS });
  }, [getDocuments]);

  return !plannedWorkouts.length ? (
    <EmptyState />
  ) : (
    <div
      className={
        'md:flex md:space-x-4 space-y-4 md:space-y-0 flex w-full flex-col md:flex-row'
      }>
      {plannedWorkouts?.map(workout => (
        <div
          className={'text-white text-2xl bg-black md:w-40 rounded-3xl p-5 text-center'}>
          <p>{formatDate({ date: workout.date, format: 'descriptive' })}</p>
        </div>
      ))}
    </div>
  );
};

PlannedWorkouts.propTypes = {
  getDocuments: PropTypes.func,
  plannedWorkouts: PropTypes.array
};

export default PlannedWorkouts;

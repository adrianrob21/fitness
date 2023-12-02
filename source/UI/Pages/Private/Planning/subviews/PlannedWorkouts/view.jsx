import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { WORKOUTS } from 'Repos';
import { formatDate, mock } from 'Helpers';
import { ChipsGroup } from 'Components';

import { EmptyState } from './subviews';

const PlannedWorkouts = ({ getDocuments = mock, plannedWorkouts = [] }) => {
  useEffect(() => {
    getDocuments({ collectionPath: WORKOUTS });
  }, [getDocuments]);

  return !plannedWorkouts.length ? (
    <EmptyState />
  ) : (
    <div className={'md:flex flex w-full h-full flex-col md:flex-wrap md:flex-row'}>
      {plannedWorkouts?.map(workout => (
        <div
          className={
            'text-white text-2xl bg-black rounded-3xl p-5 text-center mt-4 md:ml-2 md:mr-2'
          }>
          <p>{formatDate({ date: workout.date, format: 'descriptive' })}</p>
          <div className={'flex flex-wrap h-full w-full space-x-2'}>
            <ChipsGroup
              labels={workout.muscles?.map(muscle => ({
                label: muscle.toUpperCase()
              }))}
              hasDelete={false}
            />
          </div>
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

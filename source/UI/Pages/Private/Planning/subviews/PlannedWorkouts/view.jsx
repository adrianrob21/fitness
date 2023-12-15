import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { WORKOUTS } from 'Repos';

import { renderWorkoutCard } from './renderFunctions';

import { EmptyState } from './subviews';

const PlannedWorkouts = ({ getDocuments = mock, plannedWorkouts = [] }) => {
  useEffect(() => {
    getDocuments({ collectionPath: WORKOUTS, keyToUpdate: 'plannedWorkouts' });
  }, [getDocuments]);

  return !plannedWorkouts.length ? (
    <EmptyState />
  ) : (
    <div className={'md:flex flex w-full h-full flex-col md:flex-wrap md:flex-row'}>
      {plannedWorkouts?.map(renderWorkoutCard)}
    </div>
  );
};

PlannedWorkouts.propTypes = {
  getDocuments: PropTypes.func,
  plannedWorkouts: PropTypes.array
};

export default PlannedWorkouts;

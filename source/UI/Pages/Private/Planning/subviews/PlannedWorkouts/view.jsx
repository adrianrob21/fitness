import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { WORKOUTS } from 'Repos';

import { renderWorkoutCard } from './renderFunctions';

import { EmptyState } from './subviews';

const PlannedWorkouts = ({
  getDocuments = mock,
  plannedWorkouts = [],
  processingPlannedWorkouts = false,
  updatePlanningProps = mock
}) => {
  useEffect(() => {
    getDocuments({
      collectionPath: WORKOUTS,
      keyToUpdate: 'plannedWorkouts',
      processingKey: 'processingPlannedWorkouts'
    });
  }, [getDocuments]);

  return processingPlannedWorkouts ? (
    <div className={'flex h-full w-full justify-center items-center'}>
      <FontAwesomeIcon
        icon={faDumbbell}
        spin
        style={{ color: '#ffffff', width: '10rem', height: '10rem' }}
      />
    </div>
  ) : !plannedWorkouts.length ? (
    <EmptyState updateProps={updatePlanningProps} />
  ) : (
    <div className={'md:flex flex w-full h-full flex-col md:flex-wrap md:flex-row'}>
      {plannedWorkouts?.map(renderWorkoutCard)}
    </div>
  );
};

PlannedWorkouts.propTypes = {
  getDocuments: PropTypes.func,
  plannedWorkouts: PropTypes.array,
  processingPlannedWorkouts: PropTypes.bool,
  updatePlanningProps: PropTypes.func
};

export default PlannedWorkouts;

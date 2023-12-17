import { connect } from 'react-redux';

import { trainingsSliceActions } from 'Reducers/trainingsSlice';

import Exercises from './view';

export default connect(
  state => ({
    processingExerciseUpdate: state.transientSlice.processingExerciseUpdate,
    selectedTab: state.trainingsSlice?.selectedTab,
    trainingsState: state?.trainingsSlice || {},
    workouts: state.trainingsSlice?.workouts
  }),
  {
    getDayWorkouts: trainingsSliceActions.getDayWorkouts,
    updateExercise: trainingsSliceActions.updateExercise,
    updateTrainingsProps: trainingsSliceActions.updateProps
  }
)(Exercises);

import { connect } from 'react-redux';

import { trainingsSliceActions } from 'Reducers/trainingsSlice';

import Exercises from './view';

export default connect(
  state => ({
    trainingsState: state?.trainingsSlice || {},
    workouts: state.trainingsSlice?.workouts,
    selectedTab: state.trainingsSlice?.selectedTab
  }),
  {
    deleteTrainingsKey: trainingsSliceActions.deleteKey,
    getDayWorkouts: trainingsSliceActions.getDayWorkouts,
    updateExercise: trainingsSliceActions.updateExercise,
    updateTrainingsProps: trainingsSliceActions.updateProps
  }
)(Exercises);

import { connect } from 'react-redux';

import { trainingsSliceActions } from 'Reducers/trainingsSlice';

import Exercises from './view';

export default connect(
  state => ({
    workouts: state.trainingsSlice?.workouts,
    selectedDate: state.trainingsSlice?.selectedDate,
    selectedTab: state.trainingsSlice?.selectedTab
  }),
  {
    getDayWorkouts: trainingsSliceActions.getDayWorkouts,
    updateTrainingsProps: trainingsSliceActions.updateProps
  }
)(Exercises);

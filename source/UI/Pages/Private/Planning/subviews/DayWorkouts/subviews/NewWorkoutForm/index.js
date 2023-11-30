import { connect } from 'react-redux';

import { appSliceActions } from 'Reducers/appSlice';
import { workoutSliceActions } from 'Reducers/workoutSlice';
import { exerciseSliceActions } from 'Reducers/exerciseSlice';
import { planningSliceActions } from 'Reducers/planningSlice';
import { transientSliceActions } from 'Reducers/transientSlice';

import NewWorkoutForm from './view';

export default connect(
  state => ({
    exerciseState: state.exerciseSlice,
    planningState: state.planningSlice,
    transient: state.transientSlice,
    userId: state.userSlice.userId,
    workoutState: state.workoutSlice
  }),
  {
    createDocument: appSliceActions.createDocument,
    deleteKey: planningSliceActions.deleteKey,
    resetExercise: exerciseSliceActions.reset,
    resetTransient: transientSliceActions.reset,
    resetWorkout: workoutSliceActions.reset,
    updateExerciseProps: exerciseSliceActions.updateProps,
    updatePlanningProps: planningSliceActions.updateProps,
    updateSeries: exerciseSliceActions.updateSeries,
    updateTransientProps: transientSliceActions.updateProps,
    updateWorkoutProps: workoutSliceActions.updateProps
  }
)(NewWorkoutForm);

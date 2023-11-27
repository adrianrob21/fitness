import { connect } from 'react-redux';

import { planningSliceActions } from 'Reducers/planningSlice';
import { transientSliceActions } from 'Reducers/transientSlice';

import NewWorkoutForm from './view';

export default connect(
  state => ({
    planningState: state.planningSlice,
    transient: state.transientSlice
  }),
  {
    updatePlanningProps: planningSliceActions.updateProps,
    updateSeries: planningSliceActions.updateSeries,
    updateTransientProps: transientSliceActions.updateProps
  }
)(NewWorkoutForm);

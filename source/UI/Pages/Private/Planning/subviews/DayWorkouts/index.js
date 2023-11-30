import { connect } from 'react-redux';

import { planningSliceActions } from 'Reducers/planningSlice';

import DayWorkouts from './view';

export default connect(
  state => ({
    planningState: state.planningSlice
  }),
  {
    deleteKey: planningSliceActions.deleteKey,
    updatePlanningProps: planningSliceActions.updateProps
  }
)(DayWorkouts);

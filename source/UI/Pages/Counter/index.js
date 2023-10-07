import { connect } from "react-redux";

import { counterSliceActions } from "Reducers/counterSlice";

import Counter from "./view";

export default connect(
  (state) => ({
    count: state.counterSlice.count,
  }),
  {
    increment: counterSliceActions.increment,
    decrement: counterSliceActions.decrement,
    resetCounter: counterSliceActions.resetCounter,
  }
)(Counter);

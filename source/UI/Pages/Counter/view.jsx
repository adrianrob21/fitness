import React from "react";
import PropTypes from "prop-types";

const Counter = ({ count, decrement, increment, resetCounter }) => (
  <>
    <div
      className={
        "flex flex-col width-1/3 border justify-center items-center border-yellow-700"
      }
    >
      <button onClick={increment.bind(null, null)}>Increment</button>
      <h1 className="text-4xl">{count}</h1>
      <button onClick={decrement.bind(null, null)}>Decrement</button>
      <button onClick={resetCounter.bind(null, null)}>Reset Counter</button>
    </div>
  </>
);

Counter.propTypes = {
  count: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  resetCounter: PropTypes.func,
};

export default Counter;

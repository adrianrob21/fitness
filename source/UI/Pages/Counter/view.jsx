import React from "react";
import PropTypes from "prop-types";

import { Button } from "Components";

const Counter = ({ count, decrement, increment, resetCounter }) => (
  <>
    <div
      className={
        "flex flex-col width-1/3 border justify-center items-center border-yellow-700"
      }
    >
      <Button onClick={increment.bind(null, null)} label={"Increment"} />
      <h1 className="text-4xl">{count}</h1>
      <Button onClick={decrement.bind(null, null)} label={"Decrement"} />
      <Button onClick={resetCounter.bind(null, null)} label={"Reset Counter"} />
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

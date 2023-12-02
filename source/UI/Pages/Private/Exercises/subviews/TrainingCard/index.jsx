import { useState } from 'react';
import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import { useTimer } from 'Hooks';
import { Button } from 'Components';

const onNext = ({ count, setCount, series, pause, setPause }) => {
  if (pause || !series[`pause${count}`]) {
    setPause(false);
    setCount(prev => prev + 1);
  } else if (series[`pause${count}`]) {
    setPause(true);
  }
};

const TrainingCard = ({ exercise = {} }) => {
  const [count, setCount] = useState(1);
  const [pause, setPause] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  const { minutes, seconds } = useTimer({
    time: exercise?.series[`pause${count}`],
    startTimer,
    setStartTimer
  });

  console.log(minutes, seconds);

  return (
    <div
      className={
        'flex flex-col mt-10 justify-center bg-black w-48 items-center rounded-3xl p-5 space-y-10'
      }>
      <p className={'text-white'}>{exercise.exerciseName}</p>
      <div>
        {pause ? (
          <p className={'text-white'}>Pause</p>
        ) : (
          <div className={'space-y-4 mb-4'}>
            <p className={'text-white'}>{`Reps: ${exercise?.series[count]}`}</p>
            <p className={'text-white'}>{`Sets: ${count}/${exercise?.numberOfSets}`}</p>
          </div>
        )}
        <Button
          label={count === parseInt(exercise.numberOfSets) ? 'Finish' : 'Next'}
          onClick={
            count === parseInt(exercise.numberOfSets)
              ? mock
              : onNext.bind(null, {
                  setCount,
                  setPause,
                  pause,
                  count,
                  series: exercise?.series
                })
          }
        />
      </div>
    </div>
  );
};

TrainingCard.propTypes = {
  exercise: PropTypes.object
};

export default TrainingCard;

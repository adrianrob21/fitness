import moment from 'moment';
import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import { useTimer } from 'Hooks';
import { Button } from 'Components';

import { filterOutId, getButtonProps, generateView } from './bindings';

const TrainingCard = ({
  docId = '',
  exercise = {},
  exercises = [],
  trainingsState = {},
  updateExercise = mock,
  updateTrainingsProps = mock,
  workout = {}
}) => {
  const { id = '' } = exercise;
  const { exerciseCount = 1, exercisePause = false, inProgress = '' } = trainingsState;

  const { minutes, seconds, startTimer } = useTimer();

  const isPast = moment(workout.date).isBefore(moment(), 'day');

  const isInProgress = inProgress === id;
  const filterOutExercise = exercises.filter(filterOutId.bind(null, { id: exercise.id }));

  const buttonArgs = {
    docId,
    exercise,
    exercise,
    exerciseCount,
    exercisePause,
    filterOutExercise,
    id,
    startTimer,
    updateExercise,
    updateTrainingsProps,
    workout
  };

  const buttonProps = getButtonProps(
    !isInProgress,
    parseInt(exercise.numberOfSets) === exerciseCount,
    buttonArgs,
    updateTrainingsProps
  );

  const viewConditionals = {
    anotherInProgress: !!inProgress && inProgress !== id,
    exercisePause,
    isFinished: exercise.finished,
    isPast
  };

  const viewArgs = {
    exercise,
    exerciseCount,
    minutes,
    seconds
  };

  return (
    <div
      className={
        'flex flex-col mt-10 justify-center bg-black w-48 items-center rounded-3xl p-5 space-y-5'
      }>
      <p className={'text-white text-xl font-semibold text-center'}>
        {exercise.exerciseName}
      </p>
      <div>
        {generateView(viewConditionals, viewArgs)}
        {!exercise.finished && (
          <Button
            label={buttonProps?.label}
            disabled={!!inProgress && !isInProgress}
            onClick={buttonProps?.onClick}
          />
        )}
      </div>
    </div>
  );
};

TrainingCard.propTypes = {
  docId: PropTypes.string,
  exercise: PropTypes.object,
  exercises: PropTypes.array,
  trainingsState: PropTypes.object,
  updateExercise: PropTypes.func,
  updateTrainingsProps: PropTypes.func,
  workout: PropTypes.object
};

export default TrainingCard;

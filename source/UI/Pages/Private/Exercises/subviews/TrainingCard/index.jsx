import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import { useTimer } from 'Hooks';
import { Button } from 'Components';

import { filterOutId, onFinish, onNext } from './bindings';

const TrainingCard = ({
  exercise = {},
  trainingsState = {},
  exercises = [],
  deleteTrainingsKey = mock,
  updateExercise = mock,
  workout = {},
  docId = '',
  updateTrainingsProps = mock
}) => {
  const { id = '' } = exercise;
  const { exerciseCount = 1, exercisePause = false, inProgress = '' } = trainingsState;

  const { minutes, seconds, startTimer } = useTimer();

  const isInProgress = inProgress === id;
  const filterOutExercise = exercises.filter(filterOutId.bind(null, { id: exercise.id }));

  return (
    <div
      className={
        'flex flex-col mt-10 justify-center bg-black w-48 items-center rounded-3xl p-5 space-y-10'
      }>
      <p className={'text-white'}>{exercise.exerciseName}</p>
      <div>
        {exercise.finished ? (
          <div className={'mb-10'}>
            <p className={'text-white'}>Finished</p>
          </div>
        ) : !!inProgress && inProgress !== id ? (
          <div>
            <p className={'text-white mb-2'}>Another exercise is in progress</p>
          </div>
        ) : exercisePause ? (
          <p className={'text-white'}>{`${minutes}:${seconds}`}</p>
        ) : (
          <div className={'space-y-4 mb-4'}>
            <p className={'text-white'}>{`Reps: ${exercise?.series[exerciseCount]}`}</p>
            <p
              className={
                'text-white'
              }>{`Sets: ${exerciseCount}/${exercise?.numberOfSets}`}</p>
          </div>
        )}
        {!exercise.finished && (
          <Button
            label={
              !isInProgress
                ? 'Start'
                : parseInt(exercise.numberOfSets) === exerciseCount
                ? 'Finish'
                : 'Next'
            }
            disabled={!!inProgress && !isInProgress}
            onClick={
              !isInProgress
                ? updateTrainingsProps.bind(null, { inProgress: id })
                : parseInt(exercise.numberOfSets) === exerciseCount
                ? onFinish.bind(null, {
                    deleteTrainingsKey,
                    updateExercise,
                    docId,
                    filterOutExercise,
                    exercise,
                    workout
                  })
                : onNext.bind(null, {
                    exerciseCount,
                    exercisePause,
                    exercise,
                    startTimer,
                    updateTrainingsProps
                  })
            }
          />
        )}
      </div>
    </div>
  );
};

TrainingCard.propTypes = {
  deleteTrainingsKey: PropTypes.func,
  docId: PropTypes.string,
  exercise: PropTypes.object,
  exercises: PropTypes.array,
  trainingsState: PropTypes.object,
  updateExercise: PropTypes.func,
  updateTrainingsProps: PropTypes.func,
  workout: PropTypes.object
};

export default TrainingCard;

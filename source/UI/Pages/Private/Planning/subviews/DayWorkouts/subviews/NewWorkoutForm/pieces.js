import { Button } from 'Components';

const renderExerciseCard = exercise => (
  <div className='w-24 h-24 bg-lightGray flex items-center justify-center'>
    <p className='text-black'>{exercise.exerciseName}</p>
  </div>
);

export const renderExercisesList = ({
  addWorkoutDisabled,
  createDocument,
  exercises,
  onCreateWorkout,
  resetExercise,
  resetTransient,
  resetWorkout,
  updatePlanningProps,
  userId,
  workoutState
}) => (
  <div className={'space-y-10'}>
    <Button
      disabled={addWorkoutDisabled}
      label={'Add workout'}
      onClick={onCreateWorkout.bind(null, {
        updatePlanningProps,
        resetExercise,
        resetWorkout,
        resetTransient,
        createDocument,
        workoutState,
        userId
      })}
    />
    <div className={'flex space-x-4 flex-wrap'}>{exercises.map(renderExerciseCard)}</div>
  </div>
);

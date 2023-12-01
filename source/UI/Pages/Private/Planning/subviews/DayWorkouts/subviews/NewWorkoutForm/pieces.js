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
}) => {
  const muscles = exercises.length
    ? Array.from(
        new Set(
          exercises
            .map(exercise => exercise.selectedCategories)
            .reduce((prev, current) => [...prev, ...current])
        )
      )
    : [];

  return (
    <div className={'space-y-10'}>
      <Button
        disabled={addWorkoutDisabled}
        label={'Add workout'}
        onClick={onCreateWorkout.bind(null, {
          createDocument,
          muscles,
          resetExercise,
          resetTransient,
          resetWorkout,
          updatePlanningProps,
          userId,
          workoutState
        })}
      />
      <div className={'flex space-x-4 flex-wrap'}>
        {exercises.map(renderExerciseCard)}
      </div>
    </div>
  );
};

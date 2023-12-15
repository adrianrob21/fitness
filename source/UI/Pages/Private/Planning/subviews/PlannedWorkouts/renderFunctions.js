import { v4 as randomKey } from 'uuid';

import I18n from 'Translations';
import { formatDate } from 'Helpers';

const renderExerciseName = exercise => (
  <p key={randomKey()} className={'text-white text-xs truncate'}>
    {`• ${exercise.exerciseName}`}
  </p>
);

export const renderWorkoutCard = workout => {
  const exercises = workout?.exercises.slice(0, 3);

  return (
    <div
      key={randomKey()}
      className={
        'w-40 flex flex-col items-center justify-center h-44 text-center space-y-4 border-2 p-3 border-lightGray bg-black rounded-lg'
      }>
      <p className={'text-white font-semibold'}>
        {formatDate({ date: workout?.date, format: 'descriptive' })}
      </p>
      <div>
        {exercises.map(renderExerciseName)}
        {workout.exercises.length > 3 && (
          <p className={'text-white text-xs'}>{`...${I18n.t('planning:more')}`}</p>
        )}
      </div>
    </div>
  );
};

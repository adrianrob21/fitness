import {
  faCalendarCheck,
  faCalendarXmark,
  faClock,
  faDumbbell
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import I18n from 'Translations';

export const renderAnotherInProgress = () => (
  <div className={'flex flex-col justify-center mb-4 space-y-2'}>
    <FontAwesomeIcon icon={faDumbbell} spin style={{ color: '#ffffff' }} />
    <p className={'text-white mb-2 text-center'}>
      {I18n.t('exercise:anotherInProgress')}
    </p>
  </div>
);

export const renderExercise = ({ exercise, exerciseCount }) => (
  <div className={'space-y-4 mb-4'}>
    <p className={'text-white'}>{`${I18n.t('exercise:repetitions')}: ${
      exercise?.series[exerciseCount]
    }`}</p>
    <p className={'text-white'}>{`${I18n.t('exercise:sets')}: ${exerciseCount}/${
      exercise?.numberOfSets
    }`}</p>
  </div>
);

export const renderExercisePause = ({ minutes, seconds }) => (
  <div className={'flex flex-col items-center justify-center mb-4 space-y-2'}>
    <div className={'flex space-x-5 items-center'}>
      <FontAwesomeIcon icon={faClock} style={{ color: '#ffffff' }} size={'2xl'} />
      <p className={'text-white'}>{`${minutes}:${seconds}`}</p>
    </div>
    <p className={'text-white'}>{I18n.t('exercise:pause')}</p>
  </div>
);
export const renderFinished = () => (
  <div className={'flex flex-col items-center justify-center mb-4 space-y-2'}>
    <FontAwesomeIcon icon={faCalendarCheck} style={{ color: '#ffffff' }} size={'2xl'} />
    <p className={'text-white'}>{I18n.t('exercise:completed')}</p>
  </div>
);

export const renderPast = () => (
  <div className={'flex flex-col justify-center mb-4 space-y-2'}>
    <FontAwesomeIcon icon={faCalendarXmark} style={{ color: '#ffffff' }} size={'2xl'} />
    <p className={'text-white text-center'}>{I18n.t('exercise:pastExercise')}</p>
  </div>
);

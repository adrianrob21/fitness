import moment from 'moment';

export const count = ({ setActualCount, add = false }) => {
  if (!add) setActualCount(prev => prev - 1);
  else setActualCount(prev => prev + 1);
};

const transformToTime = string => {
  const newString = string.split(':').join('');

  if (newString.length === 3) {
    const seconds = parseInt(newString.slice(1, 3));

    let secondsToDisplay = seconds;

    if (seconds > 59) {
      secondsToDisplay = 59;
    }

    return `${newString.slice(0, 1)}:${secondsToDisplay}`;
  }
  if (newString.length === 4) {
    const minutes = parseInt(newString.slice(0, 2));
    const seconds = parseInt(newString.slice(2, 4));

    let minutesToDisplay = minutes;
    let secondsToDisplay = seconds;

    if (minutes > 59) {
      minutesToDisplay = 59;
    }
    if (seconds > 59) {
      secondsToDisplay = 59;
    }

    return `${minutesToDisplay}:${secondsToDisplay}`;
  }
  return newString?.trim();
};

export const onChange = ({ updateProps, actualCount, isPause = false }, value) => {
  updateProps({
    date: moment().format('MM/DD/YYYY'),
    value: isPause
      ? { [`pause${actualCount}`]: transformToTime(value) }
      : { [actualCount]: value }
  });
};

export const updatePause = ({ onCheck, updateProps, actualCount, checkBoxActive }) => {
  onCheck({
    [`noPause${actualCount}`]: !checkBoxActive
  });

  updateProps({
    date: moment().format('MM/DD/YYYY'),
    value: { [`pause${actualCount}`]: 0 }
  });
};

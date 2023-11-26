import moment from 'moment';

export const count = ({ setActualCount, add = false }) => {
  if (!add) setActualCount(prev => prev - 1);
  else setActualCount(prev => prev + 1);
};

export const onChange = ({ updateProps, actualCount, isPause = false }, value) => {
  updateProps({
    date: moment().format('MM/DD/YYYY'),
    value: isPause ? { [`pause${actualCount}`]: value } : { [actualCount]: value }
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

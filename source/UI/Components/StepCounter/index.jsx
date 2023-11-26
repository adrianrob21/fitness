import moment from 'moment';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import I18n from 'Translations';
import { PauseCount, SeriesCount } from './subviews';

const StepCounter = ({
  maxCount = undefined,
  onCheck = mock,
  pauseLabel = I18n.t('planning:newWorkoutForm.counter.pauseLabel'),
  series = {},
  seriesLabel = I18n.t('planning:newWorkoutForm.counter.seriesLabel'),
  transient = {},
  updateProps = mock
}) => {
  const [actualCount, setActualCount] = useState(1);

  const checkBoxActive = !!transient[`noPause${actualCount}`];

  const pauseValue =
    series.hasOwnProperty(moment().format('MM/DD/YYYY')) &&
    series[moment().format('MM/DD/YYYY')].hasOwnProperty(`pause${actualCount}`)
      ? series[moment().format('MM/DD/YYYY')][`pause${actualCount}`]
      : 0;

  return (
    <div className={'flex flex-col space-y-4'}>
      <SeriesCount
        {...{
          actualCount,
          checkBoxActive,
          label: seriesLabel,
          maxCount,
          pauseValue,
          series,
          setActualCount,
          updateProps
        }}
      />
      <PauseCount
        {...{
          actualCount,
          checkBoxActive,
          label: pauseLabel,
          maxCount,
          onCheck,
          pauseValue,
          updateProps
        }}
      />
    </div>
  );
};

StepCounter.propTypes = {
  maxCount: PropTypes.number,
  onCheck: PropTypes.func,
  pauseLabel: PropTypes.string,
  series: PropTypes.object,
  seriesLabel: PropTypes.string,
  transient: PropTypes.object,
  updateProps: PropTypes.func
};

export default StepCounter;

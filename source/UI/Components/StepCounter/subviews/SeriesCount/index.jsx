import moment from 'moment';
import PropTypes from 'prop-types';

import I18n from 'Translations';
import { Input } from 'Components';

import { renderArrow } from '../../pieces';
import { count, onChange } from '../../bindings';

const SeriesCount = ({
  actualCount = undefined,
  checkBoxActive = false,
  label = '',
  maxCount = undefined,
  pauseValue = undefined,
  series = {},
  setActualCount = mock,
  updateProps = mock
}) => {
  const showLeft = actualCount > 1;

  const inputValue = series.hasOwnProperty(actualCount) ? series[actualCount] : 0;

  const showRight =
    series.hasOwnProperty(actualCount) &&
    inputValue > 0 &&
    actualCount < maxCount &&
    (parseInt(pauseValue.split(':').join('')) > 0 || checkBoxActive);

  return (
    <div className={'space-y-2'}>
      <div className={'flex space-x-4 items-center'}>
        <p className={'text-white'}>{label}</p>
        <div className={'flex space-x-4 items-center'}>
          {renderArrow({ count, showArrow: showLeft, setActualCount })}
          <span>
            <p className={'text-white'}>{`${actualCount}/${maxCount}`}</p>
          </span>
          {renderArrow({
            count,
            showArrow: showRight,
            setActualCount,
            direction: 'right',
            add: true
          })}
        </div>
      </div>
      <Input
        placeholder={I18n.t('planning:newWorkoutForm.counter.placeholder')}
        backgroundColor={'black'}
        type={'number'}
        label={'Reps'}
        value={inputValue}
        customOnChange={onChange.bind(null, { updateProps, actualCount })}
      />
    </div>
  );
};

SeriesCount.propTypes = {
  actualCount: PropTypes.number,
  checkBoxActive: PropTypes.bool,
  label: PropTypes.string,
  maxCount: PropTypes.number,
  pauseValue: PropTypes.number,
  series: PropTypes.object,
  setActualCount: PropTypes.func,
  updateProps: PropTypes.func
};

export default SeriesCount;

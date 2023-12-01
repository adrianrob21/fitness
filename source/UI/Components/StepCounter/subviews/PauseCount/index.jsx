import PropTypes from 'prop-types';

import I18n from 'Translations';
import { Input, Checkbox } from 'Components';

import { updatePause, onChange } from '../../bindings';

const PauseCount = ({
  actualCount = undefined,
  checkBoxActive = false,
  label = '',
  maxCount = undefined,
  onCheck = mock,
  pauseValue = '',
  updateProps = mock
}) => {
  if (actualCount === maxCount) return;

  return (
    <div className={'space-y-2 animate-in zoom-in'}>
      <div className={'flex space-x-4'}>
        <p className={'text-white'}>{label}</p>
        <p className={'text-white'}>{`${actualCount} and ${actualCount + 1}`}</p>
      </div>
      <div className={'flex items-center h-10 space-x-4'}>
        <Checkbox
          active={checkBoxActive}
          label={'No Pause'}
          onCheck={updatePause.bind(null, {
            actualCount,
            checkBoxActive,
            onCheck,
            updateProps
          })}
        />
        {!checkBoxActive && (
          <div className={'animate-in zoom-in-50'}>
            <Input
              backgroundColor={'black'}
              customOnChange={onChange.bind(null, {
                updateProps,
                actualCount,
                isPause: true
              })}
              maxLength={5}
              placeholder={I18n.t('planning:newWorkoutForm.counter.pauseTime')}
              value={pauseValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};

PauseCount.propTypes = {
  actualCount: PropTypes.number,
  checkBoxActive: PropTypes.bool,
  label: PropTypes.string,
  maxCount: PropTypes.number,
  onCheck: PropTypes.func,
  pauseValue: PropTypes.number,
  updateProps: PropTypes.func
};

export default PauseCount;

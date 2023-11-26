import PropTypes from 'prop-types';

import { Icon } from 'Components';
import { classNames, mock } from 'Helpers';

const Checkbox = ({ active = false, label = '', onCheck = mock }) => (
  <div className={'flex items-center'}>
    <div
      onClick={onCheck}
      className={classNames(
        'h-4 w-4 border-primary-500 p-2 cursor-pointer border-solid border-[2px] rounded-sm flex items-center justify-center',
        active && 'bg-primary-500'
      )}>
      <div className={'flex'}>
        {active && (
          <div className={'p-2 transition-opacity'}>
            <Icon iconName={'Check'} />
          </div>
        )}
      </div>
    </div>
    <p className={'text-white pl-4 w-full'}>{label}</p>
  </div>
);

Checkbox.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onCheck: PropTypes.func
};

export default Checkbox;

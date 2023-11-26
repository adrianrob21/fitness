import { ARROW_ICONS } from './constants';
import { mock, classNames } from 'Helpers';
import { Icon } from 'Components';

export const renderArrow = ({
  add = false,
  count = mock,
  direction = 'left',
  setActualCount = mock,
  showArrow
}) => (
  <div
    className={classNames(
      'cursor-pointer',
      showArrow && `animate-in ${ARROW_ICONS[direction].animation}`,
      !showArrow && 'invisible'
    )}
    onClick={count.bind(null, { setActualCount, add })}>
    <Icon iconName={ARROW_ICONS[direction]?.icon} />
  </div>
);

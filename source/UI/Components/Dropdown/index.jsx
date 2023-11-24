import { useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, mock } from 'Helpers';
import { useComponentVisible } from 'Hooks';

import Icon from '../Icon';
import { renderOptionButton } from './pieces';

const Dropdown = ({
  alreadySelected = [],
  buttonTitle = '',
  multipleSelect = true,
  options = [],
  selectedItem = undefined,
  updateProps = mock
}) => {
  const lastIndex = options?.length - 1;

  const { isComponentVisible, ref, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div
      ref={ref}
      className={
        'bg-black max-h-9 w-full relative flex hover:cursor-pointer items-center rounded-2xl p-5'
      }
      onClick={setIsComponentVisible.bind(null, !isComponentVisible)}>
      <p className={'text-white text-center w-full'}>{buttonTitle}</p>
      <div
        className={classNames(
          `hover:cursor-pointer transition-all`,
          isComponentVisible && 'rotate-90'
        )}>
        <Icon iconName={'Chevron'} />
      </div>
      <div
        className={classNames(
          'w-full bg-black mt-12 absolute top-0 left-0 rounded-b-2xl transition-all duration-300 overflow-scroll',
          !isComponentVisible && 'h-0',
          isComponentVisible && 'h-64'
        )}>
        {isComponentVisible &&
          options.map(
            renderOptionButton.bind(null, {
              alreadySelected,
              lastIndex,
              multipleSelect,
              selectedItem,
              updateProps
            })
          )}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  alreadySelected: PropTypes.array,
  buttonTitle: PropTypes.string,
  multipleSelect: PropTypes.bool,
  options: PropTypes.array,
  selectedItem: PropTypes.any,
  updateProps: PropTypes.func
};

export default Dropdown;

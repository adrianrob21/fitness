import PropTypes from 'prop-types';

import { mock } from 'Helpers';

import { renderChip } from './pieces';

const ChipsGroup = ({
  hasDelete = true,
  keyToUpdate = '',
  labels = [],
  selectedValues = [],
  updateProps = mock
}) => {
  return (
    <div className={'w-full flex flex-wrap'}>
      {labels.map(
        renderChip.bind(null, {
          hasDelete,
          keyToUpdate,
          selectedValues,
          updateProps
        })
      )}
    </div>
  );
};

ChipsGroup.propTypes = {
  hasDelete: PropTypes.bool,
  keyToUpdate: PropTypes.string,
  labels: PropTypes.array,
  selectedValues: PropTypes.array,
  updateProps: PropTypes.func
};

export default ChipsGroup;

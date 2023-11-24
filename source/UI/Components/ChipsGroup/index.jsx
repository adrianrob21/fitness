import PropTypes from 'prop-types';

import { mock } from 'Helpers';

import { renderChip } from './pieces';

const ChipsGroup = ({
  keyToUpdate = '',
  labels = [],
  hasDelete = true,
  selectedValues = [],
  updateProps = mock
}) => {
  return (
    <div className={'w-full flex flex-wrap space-x-2'}>
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

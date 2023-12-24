import PropTypes from 'prop-types';

import { classNames, mock } from 'Helpers';

import { handleOnChange, shapes } from './bindings';

const PhotoInput = ({ onChange = mock, shape = 'circle', source = '' }) => (
  <>
    <label
      htmlFor={'dropzone-file'}
      className={classNames(
        `flex relative flex-col items-center ${shapes[shape]} hover:cursor-pointer justify-center w-20 h-20`,
        !source && 'bg-white',
        source && 'border-white border-2'
      )}>
      {source && (
        <img src={source} className={'object-cover rounded-full h-full w-full'} />
      )}

      <input
        id={'dropzone-file'}
        type={'file'}
        className={'hidden'}
        onChange={handleOnChange.bind(null, onChange)}
      />
    </label>
  </>
);

PhotoInput.propTypes = {
  onChange: PropTypes.func,
  shape: PropTypes.string,
  source: PropTypes.string
};

export default PhotoInput;

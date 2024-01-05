import PropTypes from 'prop-types';

import { classNames, mock } from 'Helpers';

import { handleOnChange, shapes, sizes } from './bindings';

const PhotoInput = ({
  onChange = mock,
  shape = 'circle',
  source = '',
  size = 'avatar'
}) => (
  <label
    htmlFor={'dropzone-file'}
    className={classNames(
      `flex relative flex-col items-center ${shapes[shape]} hover:cursor-pointer justify-center ${sizes[size]}`,
      !source && 'bg-white',
      source && 'border-white border-2'
    )}>
    {source && (
      <img src={source} className={`object-cover ${shapes[shape]} h-full w-full`} />
    )}

    <input
      id={'dropzone-file'}
      type={'file'}
      className={'hidden'}
      onChange={handleOnChange.bind(null, onChange)}
    />
  </label>
);

PhotoInput.propTypes = {
  onChange: PropTypes.func,
  shape: PropTypes.string,
  size: PropTypes.string,
  source: PropTypes.string
};

export default PhotoInput;

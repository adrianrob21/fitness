import { useState } from 'react';
import PropTypes from 'prop-types';

import { INPUT_KEYS } from 'Constants';
import { classNames, mock } from 'Helpers';

import './styles.css';
import Icon from './../Icon';
import { getValueForOnChange } from './bindings';

const Input = ({
  backgroundColor = 'darkGray',
  customOnChange = undefined,
  iconName = '',
  keyToUpdate = '',
  label = '',
  notDirty = true,
  onChange = mock,
  placeholder = '',
  type = '',
  valid = false,
  validationKey = '',
  value = ''
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isInputValid = notDirty ? notDirty : !!value.length && valid;

  const showPasswordIcon = [
    INPUT_KEYS.CREATE_PASSWORD,
    INPUT_KEYS.CONFIRM_PASSWORD,
    INPUT_KEYS.PASSWORD
  ].includes(validationKey);

  const icon = showPasswordIcon ? (showPassword ? 'Eye' : 'SlashedEye') : iconName;

  return (
    <div className={'relative'}>
      {label && <p className={'text-white text-xs pb-2'}>{label}</p>}
      {(iconName || showPasswordIcon) && (
        <div
          className={classNames(
            'absolute right-1 pt-[10px] pr-2 pl-2',
            showPasswordIcon && 'cursor-pointer'
          )}
          onClick={showPasswordIcon ? setShowPassword.bind(null, !showPassword) : mock}>
          <Icon iconName={icon} color={isInputValid ? 'fill-white' : 'fill-error'} />
        </div>
      )}

      <input
        className={`rounded-2xl pt-2 pb-2 pl-4 focus:outline-none bg-${backgroundColor} text-sm w-full text-white`}
        onChange={getValueForOnChange.bind(null, {
          customOnChange,
          keyToUpdate,
          onChange
        })}
        placeholder={placeholder}
        type={!type ? (!showPassword && showPasswordIcon ? 'password' : '') : type}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  backgroundColor: PropTypes.string,
  customOnChange: PropTypes.func,
  iconName: PropTypes.string,
  key: PropTypes.string,
  keyToUpdate: PropTypes.string,
  label: PropTypes.string,
  notDirty: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  valid: PropTypes.bool,
  validationKey: PropTypes.string,
  value: PropTypes.any
};

export default Input;

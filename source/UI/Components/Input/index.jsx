import { useState } from "react";
import PropTypes from "prop-types";

import { INPUT_KEYS } from "Constants";
import { classNames, mock } from "Helpers";

import Icon from "./../Icon";

const Input = ({
  iconName = "",
  label = "",
  placeholder = "",
  validationKey = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordIcon =
    validationKey === INPUT_KEYS.CREATE_PASSWORD ||
    validationKey === INPUT_KEYS.CONFIRM_PASSWORD;

  const icon = showPasswordIcon
    ? showPassword
      ? "Eye"
      : "SlashedEye"
    : iconName;

  return (
    <div className={"relative"}>
      {label && <p className={"text-white text-xs pb-2"}>{label}</p>}
      {(iconName || showPasswordIcon) && (
        <div
          className={classNames(
            "absolute right-1 pt-[10px] pr-2 pl-2",
            showPasswordIcon && "cursor-pointer"
          )}
          onClick={
            showPasswordIcon ? setShowPassword.bind(null, !showPassword) : mock
          }
        >
          <Icon iconName={icon} />
        </div>
      )}

      <input
        type={!showPassword && showPasswordIcon && "password"}
        className={
          "bg-darkGray rounded-2xl pt-2 pb-2 pl-4 focus:outline-none text-sm w-full text-white"
        }
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  iconName: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validationKey: PropTypes.string,
};

export default Input;

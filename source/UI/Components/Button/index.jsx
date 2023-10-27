import React from "react";
import PropTypes from "prop-types";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { classNames, mock } from "Helpers";

import { BUTTON_VARIANTS } from "./constants";

const Button = ({
  disabled = false,
  fullWidth = true,
  label = "",
  onClick = mock,
  processing = false,
  variant = "default",
}) => (
  <div
    onClick={disabled || processing ? mock : onClick}
    className={classNames(
      BUTTON_VARIANTS[variant].container,
      fullWidth && "w-full",
      disabled ? "bg-primary-500" : "bg-primary-900"
    )}
  >
    {!processing && <p className={BUTTON_VARIANTS[variant].text}>{label}</p>}
    {processing && (
      <div>
        <FontAwesomeIcon icon={faDumbbell} spin style={{ color: "#ffffff" }} />
      </div>
    )}
  </div>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  processing: PropTypes.bool,
  variant: PropTypes.string,
};

export default Button;

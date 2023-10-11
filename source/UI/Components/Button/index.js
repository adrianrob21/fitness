import React from "react";
import PropTypes from "prop-types";

import { classNames, mock } from "Helpers";

import { BUTTON_VARIANTS } from "./constants";

const Button = ({
  fullWidth = false,
  label = "",
  onClick = mock,
  variant = "default",
}) => (
  <div
    onClick={onClick}
    className={classNames(
      BUTTON_VARIANTS[variant].container,
      fullWidth && "w-full"
    )}
  >
    <p className={BUTTON_VARIANTS[variant].text}>{label}</p>
  </div>
);

Button.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default Button;

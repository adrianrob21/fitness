import PropTypes from "prop-types";

import Icon from "./../Icon";

const Input = ({ placeholder = "", label = "", iconName = "" }) => {
  return (
    <div className={"relative"}>
      {label && <p className={"text-white text-xs pb-2"}>{label}</p>}
      {iconName && (
        <div className="absolute right-1 pt-[10px] pr-2 pl-2">
          <Icon iconName={iconName} />
        </div>
      )}

      <input
        className={
          "bg-darkGray rounded-2xl pt-2 pb-2 pl-4 focus:outline-none text-sm w-full text-white"
        }
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default Input;

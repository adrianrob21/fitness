import PropTypes from "prop-types";

import { UserIcon } from "Assets/svgs";

const Icons = {
  UserIcon,
};

const Icon = ({ iconName = "" }) => {
  const CustomIcon = !iconName ? <></> : Icons[iconName];

  return <CustomIcon />;
};

Icon.propTypes = {
  iconName: PropTypes.string,
};

export default Icon;

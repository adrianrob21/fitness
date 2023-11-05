import PropTypes from "prop-types";

import {
  Check,
  Envelope,
  Eye,
  IdCard,
  SlashedEye,
  UserIcon,
} from "Assets/svgs";

const Icons = {
  Check,
  Envelope,
  Eye,
  IdCard,
  SlashedEye,
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

import PropTypes from 'prop-types';

import {
  ArrowLeft,
  ArrowRight,
  Bed,
  Calendar,
  Check,
  Chevron,
  Dumbell,
  Envelope,
  Exit,
  Eye,
  Home,
  IdCard,
  Media,
  NoPlans,
  Quotes,
  SlashedEye,
  UserIcon
} from 'Assets/svgs';

const Icons = {
  ArrowLeft,
  ArrowRight,
  Bed,
  Calendar,
  Check,
  Chevron,
  Dumbell,
  Envelope,
  Exit,
  Eye,
  Home,
  IdCard,
  Media,
  NoPlans,
  Quotes,
  SlashedEye,
  UserIcon
};

const Icon = ({ color = 'fill-white', iconName = '' }) => {
  const CustomIcon = !iconName ? <></> : Icons[iconName];

  return <CustomIcon className={color} />;
};

Icon.propTypes = {
  color: PropTypes.string,
  iconName: PropTypes.string
};

export default Icon;

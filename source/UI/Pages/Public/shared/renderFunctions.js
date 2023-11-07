import { Input } from 'Components';

export const renderInput = ({ label, placeholder, validationKey, iconName }) => (
  <Input key={label} {...{ iconName, label, placeholder, validationKey }} />
);

import { Input } from 'Components';

export const renderInput = ({ iconName, label, placeholder, validationKey }) => (
  <Input key={label} {...{ iconName, label, placeholder, validationKey }} />
);

import { Input } from 'Components';

export const renderInput = (
  { updatePropsWithValidation, inputsValues },
  { iconName, label, placeholder, validationKey },
  index
) => (
  <Input
    {...{ iconName, label, placeholder, validationKey }}
    onChange={updatePropsWithValidation}
    key={index}
    keyToUpdate={validationKey}
    value={inputsValues[validationKey]?.value}
    valid={inputsValues[validationKey]?.allValid}
    notDirty={inputsValues[validationKey]?.notDirty}
  />
);

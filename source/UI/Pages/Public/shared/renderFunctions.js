import { Input } from 'Components';

export const renderInput = (
  { updatePropsWithValidation, inputsValues },
  { iconName, label, placeholder, validationKey }
) => (
  <Input
    {...{ iconName, label, placeholder, validationKey }}
    onChange={updatePropsWithValidation}
    keyToUpdate={validationKey}
    value={inputsValues[validationKey]?.value}
    valid={inputsValues[validationKey]?.allValid}
    notDirty={inputsValues[validationKey]?.notDirty}
  />
);

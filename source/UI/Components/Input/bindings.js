export const getValueForOnChange = ({ keyToUpdate, onChange, customOnChange }, e) => {
  const value = e.target.value;
  if (customOnChange) {
    customOnChange(e.target.value);
  } else {
    onChange({ [keyToUpdate]: value });
  }
};

import I18n from 'Translations';

export const classNames = (...classes) => classes.filter(Boolean).join(' ');
export const findTrueValues = value => value === true;
export const inputsValidation = input => input.allValid === true && !input.notDirty;
export const mock = () => null;
export const filterArrayValues = (array, item) => array.includes(item.value);

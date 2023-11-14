export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const mock = () => null;

export const findTrueValues = value => value === true;

export const inputsValidation = input => input.allValid === true && !input.notDirty;

import moment from 'moment';

export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const findTrueValues = value => value === true;

export const inputsValidation = input => input.allValid === true && !input.notDirty;

export const mock = () => null;

export const filterArrayValues = (array, item) => array.includes(item.value);

export const formatDate = ({ date, format = 'monthYear' }) => {
  const dateFormats = {
    monthYear: moment(date).format('YYYY-MM-DD'),
    descriptive: moment(date).format('Do, MMMM YYYY')
  };

  return dateFormats[format];
};

export const base64toBlob = (base64String, contentType = 'image/png') => {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
};

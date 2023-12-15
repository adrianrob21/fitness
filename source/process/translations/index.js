import i18next from 'i18next';

import en from './en';

i18next.init({
  lng: 'en',
  debug: process.env.NODE_ENV == 'development',
  resources: {
    en
  }
});

export default i18next;

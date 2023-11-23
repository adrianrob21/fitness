import I18n from 'Translations';

export const INPUT_KEYS = {
  CONFIRM_PASSWORD: 'confirmPassword',
  CREATE_PASSWORD: 'createPassword',
  EMAIL: 'email',
  FULL_NAME: 'fullname',
  PASSWORD: 'password',
  USERNAME: 'username'
};

export const INPUTS = {
  CREATE_PASSWORD: {
    label: I18n.t(`inputs:${INPUT_KEYS.CREATE_PASSWORD}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.CREATE_PASSWORD}.placeholder`),
    validationKey: INPUT_KEYS.CREATE_PASSWORD
  },
  CONFIRM_PASSWORD: {
    label: I18n.t(`inputs:${INPUT_KEYS.CONFIRM_PASSWORD}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.CONFIRM_PASSWORD}.placeholder`),
    validationKey: INPUT_KEYS.CONFIRM_PASSWORD
  },
  EMAIL: {
    label: I18n.t(`inputs:${INPUT_KEYS.EMAIL}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.EMAIL}.placeholder`),
    iconName: 'Envelope',
    validationKey: INPUT_KEYS.EMAIL
  },
  FULL_NAME: {
    label: I18n.t(`inputs:${INPUT_KEYS.FULL_NAME}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.FULL_NAME}.placeholder`),
    iconName: 'IdCard',
    validationKey: INPUT_KEYS.FULL_NAME
  },
  PASSWORD: {
    label: I18n.t(`inputs:${INPUT_KEYS.PASSWORD}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.PASSWORD}.placeholder`),
    validationKey: INPUT_KEYS.PASSWORD
  },
  USERNAME: {
    label: I18n.t(`inputs:${INPUT_KEYS.USERNAME}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.USERNAME}.placeholder`),
    iconName: 'UserIcon',
    validationKey: INPUT_KEYS.USERNAME
  }
};

export const WHITE_BOLD_TEXT = 'text-white font-bold text-center';

export const TEXT_WHITE = 'text-white';

export const PATHS = {
  //PUBLIC
  LOGIN: '/',
  SIGN_UP: '/SignUp',

  //PRIVATE
  DASHBOARD: '/Dashboard',
  EXERCISES: '/Exercises',
  PHOTOS: '/Photos',
  PLANNING: '/Planning',
  QUOTES: '/Quotes'
};

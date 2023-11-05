import I18n from "Translations";
import { INPUT_KEYS } from "Constants";

export const WHITE_BOLD_TEXT = "text-white font-bold text-center";

export const TEXT_WHITE = "text-white";

export const INPUTS = [
  {
    label: I18n.t(`inputs:${INPUT_KEYS.FULL_NAME}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.FULL_NAME}.placeholder`),
    iconName: "IdCard",
    validationKey: INPUT_KEYS.FULL_NAME,
  },
  {
    label: I18n.t(`inputs:${INPUT_KEYS.EMAIL}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.EMAIL}.placeholder`),
    iconName: "Envelope",
    validationKey: INPUT_KEYS.EMAIL,
  },
  {
    label: I18n.t(`inputs:${INPUT_KEYS.USERNAME}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.USERNAME}.placeholder`),
    iconName: "UserIcon",
    validationKey: INPUT_KEYS.USERNAME,
  },
  {
    label: I18n.t(`inputs:${INPUT_KEYS.CREATE_PASSWORD}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.CREATE_PASSWORD}.placeholder`),
    validationKey: INPUT_KEYS.CREATE_PASSWORD,
  },
  {
    label: I18n.t(`inputs:${INPUT_KEYS.CONFIRM_PASSWORD}.label`),
    placeholder: I18n.t(`inputs:${INPUT_KEYS.CONFIRM_PASSWORD}.placeholder`),
    validationKey: INPUT_KEYS.CONFIRM_PASSWORD,
  },
];

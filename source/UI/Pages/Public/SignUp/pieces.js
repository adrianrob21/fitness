import I18n from "Translations";
import { Input } from "Components";

import { WHITE_BOLD_TEXT } from "./constants";

export const Title = () => (
  <h1 className={`${WHITE_BOLD_TEXT} text-5xl`}>{I18n.t("signUp:title")}</h1>
);

export const Subtitle = () => (
  <h3 className={`${WHITE_BOLD_TEXT} text-sm`}>
    {I18n.t("signUp:getStarted")}
  </h3>
);

export const renderInput = ({
  label,
  placeholder,
  validationKey,
  iconName,
}) => <Input {...{ iconName, label, placeholder, validationKey }} />;

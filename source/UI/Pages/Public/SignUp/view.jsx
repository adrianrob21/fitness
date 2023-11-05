import I18n from "Translations";
import { Button, Checkbox } from "Components";
import { mock } from "Helpers";

import { INPUTS } from "./constants";
import { Title, Subtitle, renderInput } from "./pieces";

const SignUp = ({ updateTransientProps = mock, termsAccepted = false }) => {
  console.log("terms", termsAccepted);

  return (
    <main className={"pt-24 space-y-10"}>
      <div
        className={"w-full flex flex-col items-center space-y-2 justify-center"}
      >
        <Title />
        <Subtitle />
      </div>
      <form
        className={
          "min-w-4xl max-w-md pr-4 pl-4 shrink ml-auto mr-auto space-y-4"
        }
      >
        {INPUTS.map(renderInput)}
        <Checkbox
          active={termsAccepted}
          label={I18n.t("signUp:terms")}
          onCheck={updateTransientProps.bind(null, {
            termsAccepted: !termsAccepted,
          })}
        />
        <Button disabled={true} label={I18n.t("signUp:title")} />
      </form>
      <div className={"w-full flex flex-col items-center justify-center"}>
        <span className={"w-fit flex"}>
          <p className={"text-white"}>{I18n.t("signUp:hasAccount")}</p>
          <p className={"text-white pl-2 underline cursor-pointer"}>
            {I18n.t("login:login")}
          </p>
        </span>
      </div>
    </main>
  );
};

export default SignUp;

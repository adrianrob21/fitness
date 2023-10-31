import { Button } from "Components";

import I18n from "Translations";
import { INPUTS } from "./constants";
import { Title, Subtitle, renderInput } from "./pieces";

const SignUp = () => (
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
      <Button disabled={true} label={I18n.t("signUp:title")} />
    </form>
  </main>
);

export default SignUp;

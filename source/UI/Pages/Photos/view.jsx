import { useEffect } from "react";

import Repos from "Repos";
import { Input } from "Components";

const Photos = () => {
  useEffect(() => {
    Repos.pokemon.getPokemon();
  }, [Repos.pokemon.getPokemon]);

  return (
    <div className={"flex flex-col justify-center items-center w-full"}>
      <div className={"w-3/12"}>
        <h1 className={"text-white"}>Here come the photos</h1>
        <Input iconName={"UserIcon"} placeholder={"Username"} />
      </div>
    </div>
  );
};

export default Photos;

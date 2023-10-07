import React, { useEffect } from "react";

import Repos from "Repos";

const Photos = () => {
  useEffect(() => {
    Repos.pokemon.getPokemon();
  }, [Repos.pokemon.getPokemon]);

  return (
    <div>
      <h1>Here come the photos</h1>
    </div>
  );
};

export default Photos;

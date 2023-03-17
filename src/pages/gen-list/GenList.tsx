import "./GenList.css";

import type { ReactElement } from "react";

import { random, isEqual } from "lodash";
import { useState, useEffect, useRef } from "react";

import { useParams } from "react-router-dom";
import {
  useGetByGenerationQuery,
  useGetPokemonByNameQuery,
} from "../../api/poke-api";
import { UrlTypes } from "../../global";

const GenList = (): ReactElement => {
  const { gen } = useParams<keyof UrlTypes>();

  const ref = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);
  const [randPoke, setRandPoke] = useState<string>("");
  const [hide, setHide] = useState<boolean>(true);

  const pokemonByGeneration = useGetByGenerationQuery(gen ?? "").data;

  const getPokemon = useGetPokemonByNameQuery(randPoke).data;

  const getRandomPokemon = (): string => {
    return (
      pokemonByGeneration?.pokemon_species[
        random(pokemonByGeneration?.pokemon_species.length ?? 0)
      ].name ?? ""
    );
  };

  const handleRandom = (): void => {
    setHide(true);
    setRandPoke(getRandomPokemon());
  };

  const handleSubmit = (): void => {
    if (isEqual(randPoke, ref.current?.value)) {
      window.alert("Correct!!!");
      setHide(false);
    }
  };

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <>
      <div className=''>
        {count}
        <h1>Guess that pokemon</h1>
        <button onClick={handleRandom}>Get random pokemon</button>
        <div className={`${hide && "silhouette"}`}>
          <img
            src={getPokemon?.sprites?.other["official-artwork"].front_default}
          />
        </div>
        <input ref={ref} name='randInputGuess' />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default GenList;

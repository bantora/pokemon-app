import type { ReactElement } from 'react';

import { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useGetByGenerationQuery, useGetPokemonByNameQuery } from '../../api/poke-api';
import { UrlTypes } from '../../global';

const GenList = (): ReactElement => {
	const { gen } = useParams<keyof UrlTypes>();

	const [pokemon, setPokemon] = useState<string>('');

	const genData = useGetByGenerationQuery(gen ?? '').data;

	const pokeData = useGetPokemonByNameQuery(pokemon).data;
 
	console.log()

	const handleClick = (name:string): void => {
		setPokemon(name)
	}

	return (
		<>
			<div>
				{genData?.pokemon_species.map((data, index) => { 
						return <button key={index} onClick={() => handleClick(data.name)}>{data.name}</button>
					})
				}
			</div>
			<img src={pokeData?.sprites?.front_default} width={'50%'} height={'50%'}/>
		</>
	)
}

export default GenList;
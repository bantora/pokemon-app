import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonSprites = createApi({
	reducerPath: 'pokeSprites',
	baseQuery: fetchBaseQuery({baseUrl: 'https://raw.githubusercontent.com/PokeAPI/'}),
	endpoints: (builder) => ({
		getPokemonSprites: builder.query<any, string>({
			query: (name) => `sprites/master/sprites/pokemon/${name}.png`,
		}), 
	})
})

export const { useGetPokemonSpritesQuery } = pokemonSprites;
import type { RegionTypes, GenerationTypes, ByGenerationTypes, PokemonTypes } from '../redux/models/pokemon';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
	endpoints: (builder) => ({
		getPokemonByName: builder.query<PokemonTypes, string>({
			query: (name) => `pokemon/${name}`,
		}), 
		getRegions: builder.query<RegionTypes, void>({
			query: () => `region`,
		}),
		getGeneration: builder.query<GenerationTypes, void>({
			query: () => `generation`,
		}),
		getByGeneration: builder.query<ByGenerationTypes, string>({
			query: (data) => `generation/${data}`,
		})
	})
})

export const { useGetPokemonByNameQuery, useGetRegionsQuery, useGetGenerationQuery, useGetByGenerationQuery } = pokemonApi;
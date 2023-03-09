export interface NameUrl { 
	name: string;
  url: string;
}

export interface PokemonTypes {
	abilities: any,
	sprites: { 
		front_default: string,
	}
}

export interface RegionTypes {
	count: string;
	next: string | null;
	previous: string | null;
	results: NameUrl[];
} 

export interface GenerationTypes { 
	count: number,
  next: string | null,
  previous: string | null,
  results: NameUrl[],
}

export interface ByGenerationTypes {
	abilities: string[],
	id: number,
	main_region: NameUrl,
	name: string,
	names: any,
	pokemon_species: NameUrl[],
	types: NameUrl[],
	version_groups: NameUrl[]
}
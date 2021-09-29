export interface Pokemon {
	id: number;
	name: string;
	url: string;
	avatar: string;
}

export interface PokemonResults {
	pokemon: Pokemon
}
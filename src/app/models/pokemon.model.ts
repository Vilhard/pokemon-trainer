export interface Pokemon {
  id: number | null;
  name: string;
  url: string;
  avatar: string;
}

export interface PokemonResults {
  pokemon: Pokemon;
}

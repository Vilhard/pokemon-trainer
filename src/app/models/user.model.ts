import { Pokemon } from './pokemon.model';
export interface User {
  id: number | null;
  username: string;
  pokemon: Pokemon[];
}

import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { PokemonResults } from "../models/pokemon.model"

@Injectable({
	providedIn: 'root'
})

export class PokemonsService {

	private pokemons: PokemonResults[] = []
	private error: string = ''

	constructor(private readonly http: HttpClient) {
	}

	public fetchPokemons(): void {
		this.http.get<PokemonResults[]>('https://pokeapi.co/api/v2/pokemon')
			.subscribe(pokemons => {
				this.pokemons = pokemons
			}, (error: HttpErrorResponse) => {
				this.error = error.message;
			});
	}
}
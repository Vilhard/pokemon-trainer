import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import {  Pokemon, PokemonArray } from "../models/pokemon.model"

@Injectable({
	providedIn: 'root'
})

export class PokemonsService {

	private pokemons: any = [] 
	private error: string = ''

	constructor(private readonly http: HttpClient) {
	}

	public fetchPokemons(): void {
		if(sessionStorage.getItem("pokemons")){ 
			return this.pokemons = JSON.parse(sessionStorage.getItem("pokemons") || '{}');
		} else {
			this.http.get<PokemonArray>('https://pokeapi.co/api/v2/pokemon')
				.subscribe((pokemons) => {
					 this.pokemons = pokemons.results
					 sessionStorage.setItem('pokemons', JSON.stringify(this.mapAvatarToPokemons(this.pokemons)))
				}, (error: HttpErrorResponse) => {
					this.error = error.message;
				});
		}
	}
	public getPokemons(): Pokemon[] {
		return this.pokemons
	}
	public mapAvatarToPokemons(pokemons: Pokemon[]) {
		return pokemons.map((p, index) => {
			return {
				...p,
				id: index,
				avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + Number(1)}.png`
			};
		});
	 }
}
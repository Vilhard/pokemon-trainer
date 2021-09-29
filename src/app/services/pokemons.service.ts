import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import {  Pokemon } from "../models/pokemon.model"

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
			this.http.get('https://pokeapi.co/api/v2/pokemon')
				.subscribe((pokemons) => {
					 this.pokemons = pokemons;
					sessionStorage.setItem('pokemons', JSON.stringify(this.pokemons))
				}, (error: HttpErrorResponse) => {
					this.error = error.message;
				});
		}
	}
	public getPokemons(): Pokemon[] {
		return this.pokemons
	}
}
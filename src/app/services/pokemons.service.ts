
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from "../models/pokemon.model"


@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
	private pokemons: Pokemon[] = [] 
	private error: string = ''

	constructor(private readonly http: HttpClient) {
	}

	public fetchPokemons(): void {
		if(sessionStorage.getItem("pokemons")){
			return this.pokemons = JSON.parse(sessionStorage.getItem("pokemons") || '{}');
		} else {
			this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
				.subscribe((pokemons) => {
					this.pokemons =this.mapAvatarToPokemons(pokemons.results)
					 sessionStorage.setItem('pokemons', JSON.stringify(this.pokemons))
				}, (error: HttpErrorResponse) => {
					this.error = error.message;
				});
		}
	}
	public getPokemons(): Pokemon[] {
		return this.pokemons
	}
	// Map correct avatar and id to all pokemons
	public mapAvatarToPokemons(pokemons: Pokemon[]) {
		return pokemons.map((p) => {
			return {
				...p,
				id: Number(p.url.split('pokemon/').pop()?.split('/')[0]),
				avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split('pokemon/').pop()?.split('/')[0]}.png`
			};
		});
	 }
}

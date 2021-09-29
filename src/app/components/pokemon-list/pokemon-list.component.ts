import { Component } from '@angular/core'
import {  Pokemon } from '../../models/pokemon.model'
import { PokemonsService } from 'src/app/services/pokemons.service'

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
    constructor(private readonly pokemonService: PokemonsService) { }
    ngOnInit(): void {
         this.pokemonService.fetchPokemons();
      }
      get pokemons(): Pokemon[] {
          return this.pokemonService.getPokemons()
      }
      //TODO
     public setAvatarToPokemons(pokemons: Pokemon[]) {
         console.log("Tuleeko" + pokemons);
        return pokemons.map((p, index) => {
             return {
                 ...p,
                 id: index,
                 avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
             };
         });
      }
}
import { Component, OnInit } from '@angular/core'
import {  Pokemon } from '../../models/pokemon.model'
import { PokemonsService } from 'src/app/services/pokemons.service'

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit{
    pokemonsPagination: Pokemon[] = [] 
    pageOfPokemons: Array<any> | undefined;
    constructor(private readonly pokemonService: PokemonsService) { }
    ngOnInit(): void {
         this.pokemonService.fetchPokemons();
         this.pokemonsPagination = [...this.pokemons]
      }
      get pokemons(): Pokemon[] {
          return this.pokemonService.getPokemons()
      }
      onChangePage(pageOfPokemons: Array<any>) {
        // update current page of pokemons
        this.pageOfPokemons = pageOfPokemons;
    }
}
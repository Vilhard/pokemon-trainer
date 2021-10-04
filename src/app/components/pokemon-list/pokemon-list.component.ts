import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[] | undefined;
  @Input() isTrainerPage: boolean = false;
  pageOfPokemons: Array<any> | undefined;

  constructor(private readonly pokemonService: PokemonsService) {}
  ngOnInit(): void {
    this.pokemonService.fetchPokemons();
  }

  onChangePage(pageOfPokemons: Array<any>) {
    // update current page of pokemons
    this.pageOfPokemons = pageOfPokemons;
  }
}

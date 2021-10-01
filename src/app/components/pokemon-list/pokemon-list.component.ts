import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] | undefined;
  @Input() isTrainerPage: boolean = false;

  constructor(private readonly pokemonService: PokemonsService) {}
}

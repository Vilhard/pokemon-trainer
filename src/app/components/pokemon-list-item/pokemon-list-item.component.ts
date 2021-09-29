import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.css'],
})
export class PokemonListItemComponent {
    @Input() pokemon!: Pokemon;
    @Input() index!: number; 

    setPokemonAvatar(id: number) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`
  }
}
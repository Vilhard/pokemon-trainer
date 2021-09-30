import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-trainer-pokemon-list-item',
  templateUrl: './trainer-pokemon-list-item.component.html',
  styleUrls: ['./trainer-pokemon-list-item.component.css'],
})
export class TrainerPokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;

  public onFreePokemonClicked(): void {
    console.log('You have let the ' + this.pokemon?.name + ' free');
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-trainer-pokemon-list',
  templateUrl: './trainer-pokemon-list.component.html',
  styleUrls: ['./trainer-pokemon-list.component.css'],
})
export class TrainerPokemonListComponent implements OnInit {
  @Input() user: User | undefined;

  constructor() {}

  ngOnInit(): void {}
}

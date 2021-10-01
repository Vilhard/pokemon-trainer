import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { User } from '../../models/user.model';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css'],
})
export class CataloguePage implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly sessionService: SessionService,
    private readonly pokemonService: PokemonsService
  ) {}
  ngOnInit(): void {
    this.pokemonService.fetchPokemons();
  }

  get user(): User | undefined {
    return this.sessionService.user;
  }

  get pokemons(): Pokemon[] {
    return this.pokemonService.getPokemons();
  }
}

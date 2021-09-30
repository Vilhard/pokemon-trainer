import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-trainer-pokemon-list-item',
  templateUrl: './trainer-pokemon-list-item.component.html',
  styleUrls: ['./trainer-pokemon-list-item.component.css'],
})
export class TrainerPokemonListItemComponent {
  @Input() pokemon!: Pokemon;

  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) {}

  get user(): User {
    return this.userService.getUser();
  }

  public onFreeClick(): void {
    this.userService.updateUsersPokemons(
      // Getting the current user
      this.sessionService.user!,
      // Filtering the deleted Pokemon  from the new array of pokemons
      this.sessionService.user?.pokemon.filter(
        (pokemon) => pokemon.id !== this.pokemon.id
      )!,
      async () => {
        await console.log(this.sessionService.user);
      }
    );
  }
}

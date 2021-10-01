import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css'],
})
export class PokemonListItemComponent {
  @Input() pokemon!: Pokemon;
  @Input() index!: number;
  @Input() isTrainerPage!: boolean;
  caught: boolean = false;
  enableButton: boolean = true;

  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) {}

  ngOnInit(): void {
    if (
      this.sessionService.user?.pokemon.find((x) => x.id === this.pokemon.id) !=
      undefined
    ) {
      this.caught = true;
    }
  }

  get user(): User {
    return this.userService.getUser();
  }

  public onCatchClick(): void {    
    if (!this.caught) {
      this.caught = true;
      this.sessionService.user?.pokemon.push(this.pokemon);

      if (this.sessionService.user !== undefined) {
        this.userService.updateUser(this.sessionService.user);
      }

      if(this.userService.getError() !== "") {
        this.caught = false
      }
    }
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

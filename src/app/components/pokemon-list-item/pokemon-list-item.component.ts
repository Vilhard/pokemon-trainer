import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';
import { SessionService } from 'src/app/services/session.service';
import 'animate.css';

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
  ballStyle = 'pokeball-normal';
  picStyle = 'normal';
  animationClass = 'animate__animated animate__bounceIn';

  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) {}

  ngOnInit(): void {
    // Change all the caught pokemons to greyed out, if user is on the catalogue page
    if (
      this.sessionService.user?.pokemon.find((x) => x.id === this.pokemon.id) !=
      undefined
    ) {
      this.caught = true;
      this.picStyle = !this.isTrainerPage ? 'greyed-out' : 'normal';
      this.ballStyle = 'pokeball-grayed-out ';
    }
  }

  get user(): User {
    return this.userService.getUser();
  }

  public onCatchClick(): void {
    // If pokemon is not already caught, add animation, and push pokemon to session service
    if (!this.caught) {
      this.ballStyle = 'pokeball-normal ' + this.animationClass;
      this.caught = true;
      this.sessionService.user?.pokemon.push(this.pokemon);

      if (this.sessionService.user !== undefined) {
        // Update user at API with new information from session service
        this.userService.updateUser(this.sessionService.user, async () => {
          await ((this.ballStyle =
            'pokeball-grayed-out ' + this.animationClass),
          (this.picStyle = 'greyed-out'));
        });
      }

      if (this.userService.getError() !== '') {
        this.caught = false;
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { User } from '../../models/user.model';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css'],
})
export class TrainerPage implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly sessionService: SessionService
  ) {}

  // Fetching user from the session service
  get user(): User | undefined {
    return this.sessionService.user;
  }

  // Fetching user's pokemons from the session service
  get pokemons(): Pokemon[] {
    return this.sessionService.user?.pokemon!;
  }

  ngOnInit(): void {}
}

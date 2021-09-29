import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private readonly sessionService: SessionService) { }

  get user(): User | undefined{
    return this.sessionService.user
  }
  
  public onLogoutClick(): void {
    this.sessionService.logout()
  }
  

}

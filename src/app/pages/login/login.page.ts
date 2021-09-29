import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../../models/user.model'
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit{

  constructor(
    private readonly router: Router, 
    private readonly loginService: LoginService,
    private readonly sessionService: SessionService) { 
  }

  ngOnInit(): void {
    console.log(this.sessionService.user)
  }

  get user(): User {
    return this.loginService.getUser()
  }

  public onSubmit(loginForm: NgForm): void {
    this.loginService.authenticate(loginForm.value.username, async () => {
      await this.router.navigate(['trainer'])
    });
  }

  public onLogoutClick(): void {
    this.sessionService.logout()
  }
}

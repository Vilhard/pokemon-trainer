import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  constructor(private readonly loginService: LoginService) { 
  }

  ngOnInit(): void {
    //this.loginService.fetchById(1);
  }

  get user(): User {
    return this.loginService.getUser()
  }

  public onSubmit(loginForm: NgForm): void {
    this.loginService.addUser(loginForm.value.username);
  }
}

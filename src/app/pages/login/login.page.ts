import { Component, OnInit } from '@angular/core';
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
    this.loginService.fetchById(1);
    this.loginService.addUser('jukka');
  }

  get user(): User {
    return this.loginService.getUser()
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css']
})
export class CataloguePage implements OnInit {

  constructor(private readonly router: Router, private readonly sessionService: SessionService) { 
  }

  get user(): User | undefined{
    return this.sessionService.user
  }

  ngOnInit(): void {
    if(this.user === undefined) {
      this.router.navigate(['login'])
    }
  }

}

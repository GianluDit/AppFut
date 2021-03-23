import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module'
import { ApifService } from '../apif.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  url = 'https://v2.api-football.com';
  auth_key = '69cff129a526af36153c0a41443f34c9';
  ligas: any[]

  constructor(private router: Router, private ApifService:ApifService ) {

  }

  ngOnInit() {
  }
}

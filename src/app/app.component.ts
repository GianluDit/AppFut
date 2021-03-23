import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApifService } from './apif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appf';
  url = 'https://v2.api-football.com';
  auth_key = '69cff129a526af36153c0a41443f34c9';



  constructor(private router: Router, private ApifService:ApifService ) {
  }

  rr() {
    setTimeout(() => {
      this.router.navigate (['./liga']);
    }  
    ,1500);
  };

  arg(){
    setTimeout(() => {
      this.router.navigate(['./arg']);
    }
  , 500);
  }

  bra(){
    setTimeout(() => {
      this.router.navigate(['./bra']);
    }
  , 1100);
  }

  chi(){
    setTimeout(() => {
      this.router.navigate(['./chi']);
    }
  , 1100);
  }

  col(){
    setTimeout(() => {
      this.router.navigate(['./col']);
    }
  , 1100);
  }

  mex(){
    setTimeout(() => {
      this.router.navigate(['./mex']);
    }
  , 1100);
  }

  uru(){
    setTimeout(() => {
      this.router.navigate(['./uru']);
    }
  , 1100);
  }

  ale(){
    setTimeout(() => {
      this.router.navigate(['./ale']);
    }
  , 1100);
  }

  esp(){
    setTimeout(() => {
      this.router.navigate(['./esp']);
    }
  , 1100);
  }

  fra(){
    setTimeout(() => {
      this.router.navigate(['./fra']);
    }
  , 1100);
  }

  ing(){
    setTimeout(() => {
      this.router.navigate(['./ing']);
    }
  , 1100);
  }

  ita(){
    setTimeout(() => {
      this.router.navigate(['./ita']);
    }
  , 1100);
  }

  eeuu(){
    setTimeout(() => {
      this.router.navigate(['./eeuu']);
    }
  , 1100);
  }

  cont(){
    setTimeout(() => {
      this.router.navigate(['./cont']);
    }
  , 1100);
  }

}



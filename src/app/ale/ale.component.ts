import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApifService } from '../apif.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ale',
  templateUrl: './ale.component.html',
  styleUrls: ['./ale.component.css']
})
export class AleComponent implements OnInit {

  ligas: any[]
  isShow: boolean
  posi: any[]
  posi1: any[]
  stand: any[]
  nombre: any[]
  fixt: any[]
  part: any[]

  backk() {
    this.location.back();
  }



  rr(id, value) {
    
    this.nombre = value
    this.isShow = !this.isShow

    this.ApifService.getfixtligas(id)
      .subscribe( (data:any) => {
        console.log(value);
        this.fixt = data.api.fixtures;
    }
    )

    this.ApifService.getligapos(id)
      .subscribe( (data:any) => {
        console.log(data.api.standings);
        this.stand = data.api.standings;
    }
  )

}



  constructor(private router: Router,
              private location: Location,
              private ApifService:ApifService,) {

                this.ApifService.getAlemania()
                .subscribe( (data:any) => {
                  console.log(data.api.leagues);
                  this.ligas = data.api.leagues;
                }
              )
          }

  ngOnInit(): void {
  }

}

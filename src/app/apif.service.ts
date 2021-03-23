import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http'
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ApifService {

  url = 'https://v2.api-football.com';
  auth_key = '69cff129a526af36153c0a41443f34c9';


  constructor( private http:HttpClient) {}



getStatus(){
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/status', {headers});

  }

getAll(){
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues', {headers});
}


getligapos(id) {

  const headers = new HttpHeaders()
  
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagueTable/'+id+'', {headers}); 
    
}

getRound(id) {
  const headers = new HttpHeaders()

  .set('X-RapidAPI-Key', this.auth_key);
  return this.http.get(this.url + '/fixtures/rounds/'+id+'/current', {headers})
}

getfixtligas(id) {

  const headers = new HttpHeaders()

  .set('X-RapidAPI-Key', this.auth_key);
  return this.http.get(this.url + '/fixtures/league/'+id+'/next/12', {headers}); 

}

getfixt(id) {

  const headers = new HttpHeaders()

  .set('X-RapidAPI-Key', this.auth_key);
  return this.http.get(this.url + '/fixtures/league/'+id+'/next/16', {headers});

}

getpais(id) {
    var idd = id
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/'+id+'/2019', {headers}); 
    
}

getArgentina() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Argentina/2020', {headers}); 
    
}

getBrasil() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Brazil/2020', {headers});
}

getChile() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Chile/2020', {headers});
}

getColombia() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Colombia/2020', {headers});
}

getMexico() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Mexico/2020', {headers});
}

getUruguay() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Uruguay/2020', {headers});
}

getAlemania() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Germany/2020', {headers});
}

getEspaña() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Spain/2020', {headers});
}

getFrancia() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/France/2020', {headers});
}

getInglaterra() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/England/2020', {headers});
}

getItalia() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/Italy/2020', {headers});
}

getEEUU() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/USA/2020', {headers});
}

getCont() {
  const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', this.auth_key);
    return this.http.get(this.url + '/leagues/country/World/2020', {headers});
}

}
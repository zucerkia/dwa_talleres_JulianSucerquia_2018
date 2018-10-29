import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url = `https://pokeapi.co/api/v2/${query}`;
    return this.http.get(url);
  }

  getAllPokemons(){
    return this.getQuery('pokemon/')
    .pipe(map(data=>data['results']));
  }

  getPokemon(name:string){
    return this.getQuery(`pokemon/${name}`);
  }


}

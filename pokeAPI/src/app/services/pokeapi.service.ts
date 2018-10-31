import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http:HttpClient) { }

  getAllPokemons(){
    const url = "../../assets/pokemons.json";
    return this.http.get(url);
  }

  

  getPokemon(name:string){
  }


}

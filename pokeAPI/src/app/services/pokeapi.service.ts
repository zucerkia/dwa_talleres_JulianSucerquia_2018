import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokeapiService {

  url = "../../assets/pokemons.json";

  constructor(private http:HttpClient) { }

  getAllPokemons(){
    return this.http.get(this.url);
  }

}

import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pokemons:any[] = [];
  constructor(private pokeapi:PokeapiService) {

    this.pokeapi.getAllPokemons()
    .subscribe((data:any)=>{
      this.pokemons = data;
      console.log(data);

    })

   }
  ngOnInit() {
  }

}

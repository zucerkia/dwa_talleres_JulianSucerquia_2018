import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';



@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent implements OnInit {

  pokemon:any={}
  constructor(private activateRoute:ActivatedRoute,
              private pokeapi:PokeapiService) {

      this.activateRoute.params.subscribe(params=>{
        this.pokemon = this.pokeapi.getAllPokemons()
        .subscribe((data:any)=>{
          this.pokemon = data[params['index']];
        })
      })
   }

  ngOnInit() {
  }



}

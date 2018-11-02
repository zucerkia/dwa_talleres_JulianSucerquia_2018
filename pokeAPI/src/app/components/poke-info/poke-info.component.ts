import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent implements OnInit {

  pokemon:any={}
  constructor(private activateRoute:ActivatedRoute,
              private pokeapi:PokeapiService,
              private router:Router) {

      this.activateRoute.params
      .subscribe(params=>{
        this.pokemon = this.pokeapi.getAllPokemons()
        .subscribe((data:any)=>{
          this.pokemon = data[params['index']];
        })
      })
   }

  ngOnInit() {
  }

  backMain(){
    this.router.navigate(['/main'])

  }


}

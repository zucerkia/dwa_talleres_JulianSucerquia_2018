import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {

  @Input() pokemon:any ={} 
  @Input() index:number;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showPokemon(){
    this.router.navigate(['/pokeInfo',this.index])
  }

}

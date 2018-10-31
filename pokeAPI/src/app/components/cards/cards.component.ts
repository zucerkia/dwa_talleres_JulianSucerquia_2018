import { Component, OnInit, Input } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() items:any[];

  constructor(private pokeapi:PokeapiService) {
   }

  ngOnInit() {
    console.log(this.items);

  }


}

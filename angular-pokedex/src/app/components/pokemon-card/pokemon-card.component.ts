import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {


  pokemon:string = "https://vignette.wikia.nocookie.net/amiibopedia/images/4/48/Artwork_de_Lucario_en_la_cuarta_generaci%C3%B3n.png/revision/latest?cb=20160727162548&path-prefix=es";
  
  constructor() { }

  ngOnInit() {
  }

}

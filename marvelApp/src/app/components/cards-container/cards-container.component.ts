import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  data:any = [];
  comics:any[] = [];
  constructor(private _marvel:MarvelService) {

    this._marvel.getComics().subscribe((data:any)=>{
      this.comics = data['data']['results'];
      this.data = data['data']['results'];
    });

   }

  ngOnInit() {
  }

  searchComic(word){
    this.comics = this._marvel.findComic(word,this.data);
    //  console.log(this.comics);
  }

}

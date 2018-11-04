import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() comic:any = {};
  dislikes:number;
  likes:number;
  constructor() {
    this.dislikes=0;
    this.likes=0;
   }

  ngOnInit() {
    console.log(this.comic.dates[0].date);
  }

  incrementScore(type){

    if(type=='like'){
      this.likes++;
    }
    else{
      this.dislikes++;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  zoom:number = 16;

  constructor() { }

  ngOnInit() {
    this.getUserLocation()
  }
  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      })
    }
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZAztkvcmi-DUE6JXHWFOhJibh2KSaHw0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

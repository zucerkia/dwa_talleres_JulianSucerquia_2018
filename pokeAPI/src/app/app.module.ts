import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { CardsComponent } from './components/cards/cards.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardsComponent,
    PokemonComponent,
    PokeInfoComponent
  ],
  imports: [
    HttpClientModule,
    APP_ROUTING,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

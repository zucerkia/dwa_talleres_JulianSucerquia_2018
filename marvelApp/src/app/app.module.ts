import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MarvelAppComponent } from './pages/marvel-app/marvel-app.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarvelAppComponent,
    CardsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

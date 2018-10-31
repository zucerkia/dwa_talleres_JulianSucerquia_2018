import {RouterModule, Routes} from '@angular/router';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';
import { MainComponent } from './pages/main/main.component';


const APP_ROUTES: Routes = [

    { path: 'pokeInfo/:index', component: PokeInfoComponent},
    { path: 'main', component: MainComponent},

    { path: '**', pathMatch: 'full', redirectTo:'main'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
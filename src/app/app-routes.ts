import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ClientesComponent }  from "./Components/clientes/clientes.component";

const APP_ROUTES: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } //declara la ruta por defecto al iniciar la pagina

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

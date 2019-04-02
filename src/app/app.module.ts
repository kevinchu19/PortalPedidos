import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { AbmClientesComponent } from './Components/clientes/abm-clientes/abm-clientes.component';
import { ListaClientesComponent } from './Components/clientes/lista-clientes/lista-clientes.component';

//Servicios
import { ClientesService }  from "./services/clientes.service";

//Routes
import { APP_ROUTING } from "./app-routes";
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { MenuComponent } from './Shared/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    AbmClientesComponent,
    ListaClientesComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

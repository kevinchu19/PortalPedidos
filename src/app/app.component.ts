import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'PortalPedidos';
  color = 'defaultdark';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;

}

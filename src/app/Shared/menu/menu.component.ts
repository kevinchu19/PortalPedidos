import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  showMenu = '';
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
}

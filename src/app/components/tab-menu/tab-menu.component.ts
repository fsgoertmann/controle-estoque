import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html'
})
export class TabMenuComponent implements OnInit {
  tabItems!: MenuItem[];

  ngOnInit() {
    this.fillMenu();
  }

  fillMenu() {
    this.tabItems = [
      {
        label: 'Cadastro',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'cadastro'
      },
      {
        label: 'Registros',
        icon: 'pi pi-fw pi-file',
        routerLink: 'registros'
      }
    ]
  }
}

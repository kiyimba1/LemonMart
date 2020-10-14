import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
    <mat-toolbar color="accent">
      <a mat-button routerLink="/manager/home" routerLinkActive="active-link">Manager's DashBoard
      </a>
      <a mat-button routerLink="/manager/users" routerLinkActive="active-link">
        User Management
      </a>
      <a mat-button routerLink="/manager/reciepts" routerLinkActive="active-link">
        Reciept Lookup
      </a>
      <span class="flex-spacer"></span>
      <button
        mat-mini-fab routerLink="/inventory"
        matTooltip="Inventory" aria-label="Inventory"
      >
        <mat-icon>list</mat-icon>
      </button>
      <button
        mat-mini-fab routerLink="/pos"
        matTooltip="POS" aria-label="POS"
      >
        <mat-icon>shopping_cart</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
        div[fxLayout]{
          margin-top: 32px;
        }`,
    `
    .active-link {
      font-weight: bold;
      border-bottom: 2px solid #005005;
    }`,
  ]
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

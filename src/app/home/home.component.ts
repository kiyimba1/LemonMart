import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-2">Hello, Ed </span>

      <button mat-raised-button color="primary">Login</button>
      <button mat-raised-button color="primary" routerLink="/manager">Login as Manager</button>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

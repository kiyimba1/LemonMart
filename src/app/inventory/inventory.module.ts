import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';

import { MaterialModule } from '../material.module';
import { InventryComponent } from './inventry.component';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [InventryComponent, InventoryHomeComponent, StockEntryComponent, ProductsComponent, CategoriesComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule
  ]
})
export class InventoryModule { }

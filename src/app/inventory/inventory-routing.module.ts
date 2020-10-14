import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { InventryComponent } from './inventry.component';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';

const routes: Routes = [
  {
    path: '',
    component: InventryComponent,
    children: [
      { path: 'categories', component: CategoriesComponent },
      { path: '', component: InventoryHomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'stock-entry', component: StockEntryComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }

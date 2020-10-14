import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerComponent } from './manager.component';
import { RecieptLookupComponent } from './reciept-lookup/reciept-lookup.component';
import { UserManagementComponent } from './user-management/user-management.component';


const routes: Routes = [{
  path: '',
  component: ManagerComponent,
  children: [
    { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
    { path: 'home', component: ManagerHomeComponent },
    { path: 'users', component: UserManagementComponent },
    { path: 'reciepts', component: RecieptLookupComponent }
  ],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }

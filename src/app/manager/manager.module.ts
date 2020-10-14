import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from '../manager/manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { RecieptLookupComponent } from './reciept-lookup/reciept-lookup.component';


@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, RecieptLookupComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule
  ]


})
export class ManagerModule { }



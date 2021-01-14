import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersManagementComponent} from './customers-management/customers-management.component';
import {LisencesManagementComponent} from './lisences-management/lisences-management.component';
import {VehiclesManagementComponent} from './vehicles-management/vehicles-management.component';
const routes: Routes = [
  {path: 'customers', component: CustomersManagementComponent},
  {path: 'lisences', component: LisencesManagementComponent},
  {path: 'vehicles', component: VehiclesManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

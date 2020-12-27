import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersManagementComponent} from './customers-management/customers-management.component';
const routes: Routes = [
  {path: 'customers', component: CustomersManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

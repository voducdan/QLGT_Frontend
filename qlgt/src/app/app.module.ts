import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersManagementComponent } from './customers-management/customers-management.component';
import { HttpClientModule } from '@angular/common/http';
import { LisencesManagementComponent } from './lisences-management/lisences-management.component';
import { VehiclesManagementComponent } from './vehicles-management/vehicles-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { ThongtinviphamComponent } from './thongtinvipham/thongtinvipham.component';
import { ChitietbienbanComponent } from './chitietbienban/chitietbienban.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CustomersManagementComponent,
    LisencesManagementComponent,
    VehiclesManagementComponent,
    ReportsManagementComponent,
    ThongtinviphamComponent,
    ChitietbienbanComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './components/chart/chart.component';
import { ToastModule } from 'primeng/toast';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ApiCallsComponent } from './components/api-calls/api-calls.component'; 
import { SharedModule } from 'primeng/api';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmployeeComponent,
    UserDetailsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    BrowserModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    DiagramModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

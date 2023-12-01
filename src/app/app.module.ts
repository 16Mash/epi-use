import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './components/chart/chart.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    BrowserModule,
    ToastModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

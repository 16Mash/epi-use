import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiCallsComponent } from '../components/api-calls/api-calls.component';
import { ChartComponent } from '../components/chart/chart.component';


@NgModule({
 imports:      [ CommonModule,ChartComponent ],
 declarations: [ ApiCallsComponent,ChartComponent],


 exports:      [ CommonModule,
                 FormsModule,
                 ApiCallsComponent,
                 ChartComponent ]
})
export class SharedModule { }
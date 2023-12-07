import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiCallsComponent } from '../components/api-calls/api-calls.component';


@NgModule({
 imports:      [ CommonModule ],
 declarations: [ ApiCallsComponent],


 exports:      [ CommonModule,
                 FormsModule,
                 ApiCallsComponent ]
})
export class SharedModule { }
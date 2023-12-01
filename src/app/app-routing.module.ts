import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ChartComponent } from './components/chart/chart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'chart',component:ChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

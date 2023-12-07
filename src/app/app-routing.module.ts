import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ChartComponent } from './components/chart/chart.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'chart',component:ChartComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  { path: 'user-profile/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

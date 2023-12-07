import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent {
  managers: Employee[] = [];


  ngOnInit(): void {
    this.manager();
  }
  constructor(private employeeService:EmployeeService){}
  manager(){
    this.employeeService.managers().subscribe(data=> 
      this.managers = data)
  
  }
}

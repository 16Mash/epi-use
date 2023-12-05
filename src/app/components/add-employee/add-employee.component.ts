import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employees: Employee[] = [];
  newEmployee: Employee = { name: '', surname: '',position: '' ,
                            birth: new Date(), salary:0 ,employeeType : '' ,isManager:false ,managerName: ''  };

constructor(private employeeService: EmployeeService){}
ngOnInit(): void {
  this.loadEmployees();
}

loadEmployees(): void {
  this.employeeService.getEmployees().subscribe(employees => {
    this.employees = employees;
  });
}

createEmployee(): void {
  this.employeeService.createEmployee(this.newEmployee).subscribe(newEmployee => {
    this.employees.push(newEmployee);
    this.newEmployee = { name: '', surname: '',position: '' ,
    birth: new Date(), salary:0 ,employeeType : '' ,isManager: false , managerName: '' }; 
  });
}

}

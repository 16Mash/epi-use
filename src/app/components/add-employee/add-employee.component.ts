import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { EmployeeType } from 'src/app/model/employee-type.enum';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  successMessage: String = '';
  employees: Employee[] = [];
  managers: Employee[] = [];
  selectedManager: string = '';
  newEmployee: Employee = { name: '', surname: '',position: '' ,
                            birth: new Date(), salary:0 ,employeeType :EmployeeType.EMPLOYEE ,isManager:false ,managerName: ''  };

constructor(private employeeService: EmployeeService){}
ngOnInit(): void {
  this.loadEmployees();
}

loadEmployees(): void {
  this.employeeService.getEmployees().subscribe(data =>{
    this.employees = data
  })
}

createEmployee(): void {
  this.employeeService.createEmployee(this.newEmployee).subscribe(newEmployee => {
    this.employees.push(newEmployee);
     this.newEmployee = { name: '', surname: '',position: '' ,
     birth: new Date(), salary:0 ,employeeType : EmployeeType.EMPLOYEE,isManager: false , managerName: '' }; 
     this.successMessage = 'Employee Added successfully!';
    },
    error => {
      console.error('Error assigning manager:', error);
    }
  
  );
}




}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { EmployeeType } from 'src/app/model/employee-type.enum';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  empId!: number;
  employee!: Employee;
  managers :Employee[] =[];
  selectedManagerId!: number;
  successMessage: string = '';
  EmployeeType = EmployeeType;
  constructor(private route: ActivatedRoute , private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const empIdParam = params['id'];
      this.empId = Number(empIdParam);
      this.getEmployeeById(this.empId);
      this.manager();
    });
  }


  getEmployeeById(empId: number):void{
    this.employeeService.getEmployeeById(this.empId).subscribe((employee: Employee) => {
      this.employee = employee;
    }, (error) => {
      console.error('Error fetching employee details:', error);
    });
  }
  manager(){
    this.employeeService.managers().subscribe(data=> 
      this.managers = data)
  
  }

assignManager(managerForm:any){
  const selectedManagerId = managerForm.value.selectedManagerId;
  console.log("manager Id :" +selectedManagerId );
  this.employeeService.assignManager(this.empId, selectedManagerId).subscribe(
    (response: any) => {
      this.successMessage = 'Manager assigned successfully!';

    },
    error => {
      console.error('Error assigning manager:', error);
    }
);
}
deleteEmployee(empId: number | undefined):void{
this.employeeService.deleteEmployee(this.empId).subscribe((employee: Employee) => {
  this.employee=this.employee;
  this.successMessage = 'Deleted successfully!';
},
error => {
  this.successMessage = error.error;
}

);
}


}

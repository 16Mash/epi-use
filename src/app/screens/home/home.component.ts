import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'epi-use';
  chart: any = [];
  employees: Employee[] = [];
 
  constructor(private router: Router ,private employeeService: EmployeeService) {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: '#9BD0F5',
            
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    this.getAllEmployees();
  }
  getAllEmployees(){
    this.employeeService.getEmployees().subscribe(data=> 
      this.employees = data)
  }


  navigateToAddEmployee(): void {
    this.router.navigate(['/add-employee']); 
  }

//   navigateToUserDetails(empId: any): void {
//     this.router.navigate(['/user-profile',empId]);
// }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
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
  chart: any;
  employees: Employee[] = [];
  managerEmployees:Employee[] = [];
  employeeCounts: number[] = [];
  managerNames: string[] = [];
  managerId = 51;
  @ViewChild('employeeCountChart') employeeCountChart!: ElementRef;
 
  
  
  
  
  constructor(private router: Router ,private employeeService: EmployeeService) {}

  ngOnInit() {
    
    this.getAllEmployees();
    this.fetchEmployeeCount();
  }

  barGraph(){
    const managerNames = this.managerEmployees.map(manager => manager.name);

    this.chart = new Chart(this.employeeCountChart.nativeElement,{
      type: 'bar',
      data: {
        labels: this.managerNames,
        datasets: [
          {
            label: 'Managers',
            data: this.employeeCounts,
            borderWidth: 1,
            backgroundColor: '#9BD0F5',
            
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero:true

          },
        },
      },
    });
  }






  getAllEmployees(){
    this.employeeService.getEmployees().subscribe(data=> 
      this.employees = data)
  }

  navigateToAddEmployee(): void {
    this.router.navigate(['/add-employee']); 
  }

  // getManagerEmployees(managerId: number) {
  //   this.employeeService.getManagerEmployees(managerId).subscribe(
  //     (data: any[]) => {
  //       this.managerEmployees = data;
  //       this.employeeCount = data.length;
  //     },
  //     error => {
  //       console.error('Error fetching manager employees:', error);
  //     }

  //   );
 
  // }

  fetchEmployeeCount() {
    this.employeeService.getManagerEmployees(this.managerId)
      .subscribe(data => {
        this.employeeCounts = data.length; // Get the size/count of the returned array
        console.log(`Employee count for Manager ID ${this.managerId}: ${this.employeeCounts}`);
        this.barGraph();
      },
      error => {
        console.error('Error fetching employee count:', error);
      });
     
  }


}



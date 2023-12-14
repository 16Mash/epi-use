import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/employee.model';
import {Chart} from 'chart.js/auto'
@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent {
  managers: Employee[] = [];
  employeesWithManagers: any;
  managerName:any[] = [];
  employeeName:any[] = [];
  managerCount!:[];


  ngOnInit(): void {
    this.getManagerEmployees();

  }
 
  constructor(private employeeService:EmployeeService){}
  manager(){
    this.employeeService.managers().subscribe(data=> 
      this.managers = data)
  }
//crossing fingers
  getManagerEmployees(): void {
  this.employeeService.getEmployeesWithManagers()
    .subscribe(data => {
      this.employeesWithManagers = data;
      let managerCountMap:any = {};
      let managerNameSet = new Set();
      if(this.employeesWithManagers != null){
       
        for(let i=0;i<this.employeesWithManagers.length;i++){
          let managerName = this.employeesWithManagers[i].managerName;
          this.managerName.push(managerName);
          managerNameSet.add(managerName);
          if (!managerCountMap[managerName]) {
            managerCountMap[managerName] = 1; // Initialize count if managerName is encountered for the first time
           
          } else {
            managerCountMap[managerName]++; // Increment count if managerName already exists
            
          }
        }
  
        // Output the manager names and their respective counts
        // for (const [manager, count] of Object.entries(managerCountMap)) {
        //   console.log(`${manager} : ${count}`);
        // }
        this.managerName = Array.from(managerNameSet);
        this.barChart(this.managerName , managerCountMap);
      }
    });
   
}
barChart(managerName:any  , managerCountMap:any){
console.log(managerCountMap)
  new Chart("myChart", {
    type: 'bar',
    data: {
      labels: managerName,
      datasets: [{
        label: 'Number Of eployees assigned to manager',
        data: managerCountMap,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
}

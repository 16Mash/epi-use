import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/employee.model';
import {Chart} from 'chart.js/auto'
import { EmployeeType } from 'src/app/model/employee-type.enum';

@Component({
  selector: 'app-chart',
  providers: [MessageService],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  managers: Employee[] = [];
  employeesWithManagers: any;
  managerName:any[] = [];
  employeeName:any[] = [];
  managerCount!:[];
  ceo: Employee[] = [];
  employee: Employee[] = [];
  ceoDataLoaded = false;
  ceoName: any[] = [];
  ceoSurname: any[] = [];
  birth: any[] = [];


  constructor(private messageService: MessageService ,private employeeService:EmployeeService) {}
  
  ngOnInit() {
   
    this.getManagerEmployees();
    this.getEmployeesByType(EmployeeType.CEO);
   this. getAllEmployees();
    }
    
    getAllEmployees() {
       this.employeeService.getEmployees().subscribe(data =>{
        this.employee = data
        this.ceoName = [];
        this.birth = [];
        this.ceoSurname = [];
        
        for (let i = 0; i < this.employee.length; i++) {
          if (this.employee[i].employeeType === EmployeeType.CEO) {
            this.ceoName.push(this.employee[i].name);
            this.ceoSurname.push(this.employee[i].surname);
            this.birth.push(this.employee[i].birth);
          }
        }
        console.log('CEO Names:', this.ceoName);
      })
      
    }
    getEmployeesByType(employeeType: EmployeeType): void {
      this.employeeService.getCEO(employeeType).subscribe(
        (data: Employee[]) => {
          this.ceo = data
          this.ceoDataLoaded = true;
          
         
        },
        (error) => {
         console.log("Couldn't find employee of type " + employeeType);
        }
      );
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
      
            this.managerName = Array.from(managerNameSet);
            this.barChart(this.managerName , managerCountMap);
          }
        });
    }
    barChart(managerName:any  , managerCountMap:any){
  
      new Chart("myChart", {
        type: 'bar',
        data: {
          labels: managerName,
          datasets: [{
            label: 'Number Of eployees assigned to manager',
            data: managerCountMap,
            borderWidth: 1,
            backgroundColor:'#36a2eb',
            borderColor: '#ffce56',
         
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

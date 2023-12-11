import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-chart',
  providers: [MessageService],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
  employeesWithManagers!: any[];

  constructor(private messageService: MessageService ,private employeeService:EmployeeService) {}

  ngOnInit() {
   
    this.getEmployeesWithManagers();
   
    }
    

      onNodeSelect(event:any) {
        this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
    }
    getEmployeesWithManagers(): void {
        this.employeeService.getEmployeesWithManagers()
          .subscribe(data => {
            this.employeesWithManagers = data;
    
        
          });
      }



}

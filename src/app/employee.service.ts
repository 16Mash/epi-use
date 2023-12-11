import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee.model';
import { Observable, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/employees';
  baseUrl = 'http://localhost:4200/user-profile';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
  createEmployee(employee: Employee): Observable<Employee> {
    
    console.log('Response from backend:', employee);
    return this.http.post<Employee>(this.apiUrl + '/create', employee);
  }
  managers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl+'/view-managers');
  }

 getEmployeeById(empId: number): Observable<Employee> {
  if (!empId || isNaN(empId)) {
    console.error('Invalid empId:', empId);
    return throwError('Invalid empId provided');
  }
  return this.http.get<any>(`${this.apiUrl}/view-employee/${empId}`);

}
assignManager(employeeId: number, managerId: number): Observable<any> {
  const url = `${this.apiUrl}/${employeeId}/assign-manager/${managerId}`;
  const payload = {employeeId, managerId };
  return this.http.patch<Employee>(url, payload);
}
promoteEmployee(employeeId: number):Observable<any>{
  const url = `${this.apiUrl}/promote/${employeeId}`;
  const payload = {employeeId };
  return this.http.patch<Employee>(url,payload);
}




deleteEmployee(employeeId: number):Observable<any>{
  const url = `${this.apiUrl}/delete/${employeeId}`;

  return this.http.delete<Employee>(url);

}
getManagerEmployees(managerId : number):Observable<any>{
  const url = `${this.apiUrl}/manager-employees/${managerId}`;
  return this.http.get(url);

}

getEmployeesWithManagers(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + '/all').pipe(
    map((employees: any[]) => {
      employees.forEach(employee => {
        
        if (employee.managerId) {
          
          const manager = employees.find(employee => employee.id === employee.managerId);  // i tried this return undefined all the time if it worked i would use the method to bind data to the org chart
          console.log(manager )
          if (manager) {
            employee.managerName = manager.name; 
            employee.displayInfo = `${employee.name} (Manager: ${manager.name})`;
          }
          else {
            employee.displayInfo = `${employee.name} (Manager Not Found)`;
          }
        } else {
          employee.displayInfo = `${employee.name} (Manager: CEO)`;
        }
      });
      return employees;
    })
  );
}
}

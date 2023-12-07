import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee.model';
import { Observable, throwError } from 'rxjs';
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
}

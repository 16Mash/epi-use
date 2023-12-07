import { EmployeeType } from "./employee-type.enum";

export interface Employee {
  id?: number,
  name: string,
  surname: string,
  salary: number,
  position: string,
  isManager: boolean,
  manager?: Employee,
  employeeType: EmployeeType,
  birth : Date,
  managerName: '' 

}

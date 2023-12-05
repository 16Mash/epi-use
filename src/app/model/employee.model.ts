export interface Employee {
  id?: number,
  name: string,
  surname: string,
  salary: 0,
  position: string,
  isManager: boolean,
  manager?: Employee,
  employeeType: '',
  birth : Date,
  managerName: ''

}

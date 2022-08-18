import {Employee} from './employee-data'
import {Injectable} from '@angular/core';

@Injectable()
export class EditEmployeeService
{
  data: Employee;
  
  setEmployee(e:Employee)
  {
    this.data=e;
  }

  getEmployee(): Employee
  {
      return this.data;
  }
}
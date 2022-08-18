import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee-data';
import {EditEmployeeService} from '../edit-employee.service';
import { DataService} from '../employee.service'
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html'
})
export class EditEmployeeComponent implements OnInit{
  constructor(private editService :EditEmployeeService, private dataService: DataService, private router:Router){};
  employee: Employee;
  ngOnInit()
  {
    if(this.editService.getEmployee()!=null)
    this.employee=this.editService.getEmployee();
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
  updateEmployee(){
    this.dataService.updateEmployee(this.employee).subscribe(() => this.goBack());
  }
}
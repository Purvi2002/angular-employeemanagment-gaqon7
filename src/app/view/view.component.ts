import { Component, OnInit } from '@angular/core';
import { DataService } from '../employee.service';
import { Employee } from '../employee-data';
import { Router } from '@angular/router';
import {EditEmployeeService} from '../edit-employee.service';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'view',
  templateUrl: './view.component.html'
  })
export class ViewEmployeeComponent implements OnInit  {
  constructor(private router: Router,private dataservice: DataService, private editService: EditEmployeeService) {}

    searchvalue:string;
    employees: Employee[]=[];
    length: number;
    
  getUsers(){
    this.dataservice.getEmployees().subscribe(data => {
      this.employees=data;
      this.length=data.length;
    });

  }
  deleteEmp(id:number)
  {
    this.dataservice.deleteEmployee(id).subscribe(data=>{this.getUsers();alert("Employee deleted with Id:"+id)});
  }
  ngOnInit(){
     this.getUsers();
  }
  search(): void {
   this.dataservice.searchEmployees(this.searchvalue).subscribe(data => {
      this.employees=data;
      this.length=data.length;
    });
  }
 
}

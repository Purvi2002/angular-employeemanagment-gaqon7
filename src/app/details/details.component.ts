import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService} from '../employee.service'
import { Employee } from '../employee-data';

@Component({
  selector: 'detail',
  templateUrl: './details.component.html'
  
})
export class EmployeeComponent  {
  @Input() employee: Employee;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }
}

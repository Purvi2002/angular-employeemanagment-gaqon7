import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-data';
import { DataService } from '../employee.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
})
export class AddEmployeeComponent implements OnInit {
  namePattern = '[A-Za-z ]{3,}';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  mobilePattern = '[0-9]{10}';
  employee: any = [];
  // valid: false;

  submitted = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.namePattern),
        Validators.maxLength(20),
      ]),
      location: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(this.mobilePattern),
      ]),
    });
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('done');
      return;
    } else {
      this.dataService
        .addEmployee(this.form.value)
        .subscribe(() => this.goBack());
    }
    this.submitted = true;
  }
}

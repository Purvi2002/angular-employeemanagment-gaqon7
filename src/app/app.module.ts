import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeData }  from './employee-data.service';
import {AddEmployeeComponent} from './add/add.component';
import {ViewEmployeeComponent} from './view/view.component';
import {EditEmployeeComponent} from './edit/edit.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import {EditEmployeeService} from './edit-employee.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'employees', component: ViewEmployeeComponent },
  { path: 'details/:id',  component: EmployeeComponent },
  {path: 'editEmployee', component: EditEmployeeComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  HttpClientModule, InMemoryWebApiModule.forRoot(EmployeeData), RouterModule, 
  RouterModule.forRoot(appRoutes),
  Ng2SearchPipeModule,ReactiveFormsModule
   ],
  declarations: [ AppComponent, EmployeeComponent, AddEmployeeComponent, ViewEmployeeComponent, EditEmployeeComponent ],
  providers:    [ EmployeeData,  EditEmployeeService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./service/employee.service";
import {Employee} from "./model/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  employees$ = this.employeeService.findAll();
  public selectedEmployee: Employee | undefined;

  constructor(private employeeService: EmployeeService) {

  }

  select(employee: Employee) {
    this.selectedEmployee = employee;
  }
}

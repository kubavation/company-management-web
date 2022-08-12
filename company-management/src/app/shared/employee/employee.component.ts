import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./service/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  employees$ = this.employeeService.findAll();

  constructor(private employeeService: EmployeeService) {

  }

}

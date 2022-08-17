import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./service/employee.service";
import {Employee} from "./model/employee";
import {EmployeeBsService} from "./service/employee-bs.service";
import {switchMap, tap} from "rxjs/operators";
import {SnackbarService} from "../snackbar/snackbar.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  employees$ = this.employeeBSService.employee$.pipe(
    tap((employee) => this.select(employee)),
    switchMap(() => this.employeeService.findAll())
  )

  public selectedEmployee: Employee | undefined;

  constructor(private employeeService: EmployeeService,
              private employeeBSService: EmployeeBsService,
              private snackbarService: SnackbarService) {

  }

  select(employee: Employee) {
    this.selectedEmployee = employee;
    if (!this.selectedEmployee) {
      console.log('on success')
      this.snackbarService.success();
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
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

  // employees$ = this.employeeBSService.employee$.pipe(
  //   tap((employee) => this.select(employee)),
  //   switchMap(() => this.employeeService.findAll())
  // )

  @Input() set employees(data: Employee[]) {
     this.empployeeData = data;
  }

  empployeeData: Employee[];
  public selectedEmployee: Employee | undefined;

  constructor(private employeeService: EmployeeService,
              private employeeBSService: EmployeeBsService) {

  }

  select(employee: Employee) {
    this.selectedEmployee = employee;
  }
}

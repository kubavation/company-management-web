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

   employee$ = this.employeeBSService.employee$.pipe(
    tap((employee) => {
      if (this.employeeData) {
        console.log('selecting')
        this.select(employee)
      }
    }),
  )

  @Input() set employees(data: Employee[]) {
     this.employeeData = data;
  }

  employeeData: Employee[];
  public selectedEmployee: Employee | undefined;

  constructor(private employeeService: EmployeeService,
              private employeeBSService: EmployeeBsService) {

  }

  select(employee: Employee) {
    this.selectedEmployee = employee;
  }
}

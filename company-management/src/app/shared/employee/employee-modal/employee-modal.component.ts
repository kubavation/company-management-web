import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {delay, tap} from "rxjs/operators";
import {BaseModalComponent} from "../../base-modal/base-modal.component";
import {Employee} from "../model/employee";
import {EmployeeTableComponent} from "../employee-table/employee-table.component";
import {Observable, of} from "rxjs";
import {EmployeeComponent} from "../employee.component";
import {BaseModalConfig} from "../../base-modal/config/base-modal-config";
import {SnackbarService} from "../../snackbar/snackbar.service";

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeModalComponent extends BaseModalComponent<Employee> {

  public readonly title = 'Employees';
  public employeeData?: Employee[];
  dialogConfig: BaseModalConfig<Employee>;


  constructor(public dialogRef: MatDialogRef<EmployeeModalComponent>,
              private snackbarService: SnackbarService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
    this.dialogConfig = {
      title: this.title,
      dialogRef: dialogRef
    }

    this.employeeData = data;
  }

  onSaveEmployee(employee) {

    if(!employee) {
      this.snackbarService.warning('First you have to chooose employee!')
      return;
    }
    this.valueSubject$.next(employee);
    this.dialogRef.close();
  }

  public afterSave(): Observable<any> {
    return this.valueSubject$;
  }
}

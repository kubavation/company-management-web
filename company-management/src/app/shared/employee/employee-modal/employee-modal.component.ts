import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
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
  dialogConfig: BaseModalConfig<Employee>;

  constructor(public dialogRef: MatDialogRef<EmployeeModalComponent>,
              private snackbarService: SnackbarService) {
    super();
    this.dialogConfig = {
      title: this.title,
      dialogRef: dialogRef
    }
  }

  onSaveEmployee(employee) {
    if(!employee) {
      this.snackbarService.success();
    }
    console.log(employee)
    this.testSubject$.next(employee)
  }

  public afterSave(): Observable<any> {
    return this.testSubject$; //fixme why observable doesnt work
  }
}

import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {delay, tap} from "rxjs/operators";
import {BaseModalComponent} from "../../base-modal/base-modal.component";
import {Employee} from "../model/employee";
import {EmployeeTableComponent} from "../employee-table/employee-table.component";
import {Observable, of} from "rxjs";
import {EmployeeComponent} from "../employee.component";
import {BaseModalConfig} from "../../base-modal/config/base-modal-config";

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeModalComponent extends BaseModalComponent<Employee> {

  public readonly title = 'Employees';
  dialogConfig: BaseModalConfig<Employee>;

  constructor(public dialogRef: MatDialogRef<EmployeeModalComponent>) {
    super();
    this.dialogConfig = {
      title: this.title,
      dialogRef: dialogRef
    }
  }

  onSave() {
    this.testSubject$.next({id: 12334})
  }

  public afterSave(): Observable<any> {
    return this.testSubject$;
  }
}

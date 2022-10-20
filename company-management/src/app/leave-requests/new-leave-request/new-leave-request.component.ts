import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {KeyValue} from "../../shared/model/key-value";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {combineLatest, Observable, of} from "rxjs";
import {catchError, map, startWith, switchMap, tap} from "rxjs/operators";
import {EmployeeBsService} from "../../shared/employee/service/employee-bs.service";
import {LeaveRequestService} from "../service/leave-request.service";
import {LeaveRequest} from "../model/leave-request";
import {CreateLeaveRequest} from "../model/create-leave-request";

@Component({
  selector: 'app-new-leave-request',
  templateUrl: './new-leave-request.component.html',
  styleUrls: ['./new-leave-request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewLeaveRequestComponent {

  @Input() leaveRequestTypes: KeyValue<string>[];
  @Output() cancel = new EventEmitter<void>();

  form = this.fb.group({
    type: [null, Validators.required],
    dateFrom: [],
    dateTo: [],
    standInEmployee: [null, Validators.required]
  });

  days$ = combineLatest(
    [
      this.form.get('dateFrom').valueChanges,
      this.form.get('dateTo').valueChanges
    ])
    .pipe(
        switchMap(([dateFrom, dateTo]) => {
          if (this.dateFromControl.valid && this.dateToControl.valid && dateFrom !== null && dateTo !== null ) {
            return of(this.daysBetweenDates(dateFrom, dateTo))
              .pipe(
                catchError(_ => {
                  return of(null)
                })
              );
          }
          return of(null);
        })
  );

  standInEmployees$ = combineLatest(this.employeeBsService.employee$, this.days$)
    .pipe(
      switchMap(([employee, days]) => {
          if (!!days) {
            return this.leaveRequestService.findStandInEmployees(employee.id);
          }
          return of([]);
      })
    );

  constructor(private fb: FormBuilder,
              private employeeBsService: EmployeeBsService,
              private leaveRequestService: LeaveRequestService) {
  }


  onSave(): void {

    const leaveRequest: CreateLeaveRequest = {
      ...this.form.value,
      employeeId: this.employeeBsService.getValue().id,
      standInEmployeeId: this.standInEmployeeControl.value
    };

    this.leaveRequestService.create(leaveRequest)
      .subscribe(_ => {
        console.log(_)
      })
  }

  onCancel(): void {
    this.cancel.next();
  }


  private get dateFromControl(): AbstractControl {
    return this.form.get('dateFrom');
  }

  private get dateToControl(): AbstractControl {
    return this.form.get('dateTo');
  }

  private get standInEmployeeControl(): AbstractControl {
    return this.form.get('standInEmployee');
  }

  private daysBetweenDates(d1, d2) {
    return (Math.ceil(Math.abs(d1 - d2) / (1000 * 60 * 60 * 24)) + 1).toString();
  }
}

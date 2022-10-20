import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {LeaveRequestService} from "./service/leave-request.service";
import {EmployeeBsService} from "../shared/employee/service/employee-bs.service";
import {filter, startWith, switchMap, tap} from "rxjs/operators";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {BehaviorSubject, combineLatest, Subject} from "rxjs";
import {LeaveRequestFilter} from "./model/leave-request-filter";
import {Router} from "@angular/router";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss']
})
export class LeaveRequestsComponent {

  @ViewChild('createRequestContainer') createRequestContainer: ElementRef;
  @ViewChild('requestList') requestList: ElementRef;

  leaveRequestTypeControl = new FormControl('');
  advancedFiltersControls = new FormControl(false);

  leaveRequestTypeControlValue$ = this.leaveRequestTypeControl.valueChanges
    .pipe(
      startWith(null)
  );

  leaveRequestTypes$ = this.leaveRequestService.findLeaveRequestTypes();
  private filterObjectSubject$ = new BehaviorSubject<LeaveRequestFilter>(null);
  private refreshLeaveRequestsSubject$ = new BehaviorSubject<void>(null);

  leaveRequests$ = combineLatest([
      this.employeesBsService.employee$,
      this.leaveRequestTypeControlValue$,
      this.filterObjectSubject$,
      this.refreshLeaveRequestsSubject$])
    .pipe(
      switchMap(([employee, requestType, filterObject, _]) => {
          if (filterObject) {
            return this.leaveRequestService.findByFilters(filterObject);
          }
          return this.leaveRequestService.findByEmployeeIdAndRequestType(employee?.id, requestType);
        }
      )
    );

  createMode = false;

  constructor(private leaveRequestService: LeaveRequestService,
              private employeesBsService: EmployeeBsService,
              private router: Router) {
  }

  advancedFiltersChange({checked}): void {
    this.leaveRequestTypeControl.setValue('');
    if (!checked) {
      this.filterObjectSubject$.next(null);
    }
  }

  filterLeaveRequests(filterObject: LeaveRequestFilter) : void {

    const filterObjWithEmployeeId = {
      ...filterObject,
      employeeId: this.employeesBsService.getValue().id
    }

    this.filterObjectSubject$.next(filterObjWithEmployeeId);
  }

  onCreate(): void {
    this.createMode = true;
    this.createRequestContainer.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }

  onCreationCancel(): void {
    this.createMode = false;
    this.requestList.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  onSuccessfulSave(): void {
    this.refreshLeaveRequestsSubject$.next();
    this.createMode = false;
    this.requestList.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LeaveRequestService} from "./service/leave-request.service";
import {EmployeeBsService} from "../shared/employee/service/employee-bs.service";
import {filter, startWith, switchMap, tap} from "rxjs/operators";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {BehaviorSubject, combineLatest, Subject} from "rxjs";
import {LeaveRequestFilter} from "./model/leave-request-filter";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss']
})
export class LeaveRequestsComponent {

  leaveRequestTypeControl = new FormControl('');
  advancedFiltersControls = new FormControl(false);

  leaveRequestTypeControlValue$ = this.leaveRequestTypeControl.valueChanges
    .pipe(
      startWith(null)
  );

  leaveRequestTypes$ = this.leaveRequestService.findLeaveRequestTypes();

  private filterObjectSubject$ = new BehaviorSubject<LeaveRequestFilter>(null);

  leaveRequests$ = combineLatest([
      this.employeesBsService.employee$,
      this.leaveRequestTypeControlValue$,
      this.filterObjectSubject$])
    .pipe(
      switchMap(([employee, requestType, filterObject]) => {
          if (filterObject) {
            return this.leaveRequestService.findByFilters(filterObject);
          }
          return this.leaveRequestService.findByEmployeeIdAndRequestType(employee?.id, requestType);
        }
      )
    );


  constructor(private leaveRequestService: LeaveRequestService,
              private employeesBsService: EmployeeBsService) {
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

}

import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {LeaveRequestService} from "./service/leave-request.service";
import {EmployeeBsService} from "../shared/employee/service/employee-bs.service";
import {filter, startWith, switchMap, tap} from "rxjs/operators";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {BehaviorSubject, combineLatest, Subject} from "rxjs";
import {LeaveRequestFilter} from "./model/leave-request-filter";
import {Router} from "@angular/router";
import {
  ConfirmationModalProvider
} from "../shared/confirmation-modal/confirmation-modal-provider/confirmation-modal-provider.service";
import {LeaveRequestListComponent} from "./leave-request-list/leave-request-list.component";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss']
})
export class LeaveRequestsComponent {

  @ViewChild('createRequestContainer') createRequestContainer: ElementRef;
  @ViewChild('requestList') requestList: ElementRef;
  @ViewChild(LeaveRequestListComponent) leaveRequestListComponent: LeaveRequestListComponent;

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
              private confirmationModalProvided: ConfirmationModalProvider,
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
    this.scrollIntoView(this.createRequestContainer, 'end');
  }

  onDelete(): void {
    this.confirmationModalProvided.open()
      .subscribe(res => console.log(res))
  }


  onCreationCancel(): void {
    this.createMode = false;
    this.scrollIntoView(this.requestList);
  }

  onSuccessfulSave(): void {
    this.refreshLeaveRequestsSubject$.next();
    this.createMode = false;
    this.scrollIntoView(this.requestList);
  }


  private scrollIntoView(el: ElementRef, blockOption = 'start'): void {
    setTimeout(() => {
      el.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: blockOption,
      });
    }, 0)
  }

  isLeaveRequestSelected(): boolean {
    return !!this.leaveRequestListComponent?.selected;
  }

}

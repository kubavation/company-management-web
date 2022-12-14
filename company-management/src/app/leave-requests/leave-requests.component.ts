import {Component, ElementRef, ViewChild} from '@angular/core';
import {LeaveRequestService} from "./service/leave-request.service";
import {EmployeeBsService} from "../shared/employee/service/employee-bs.service";
import {filter, startWith, switchMap} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, combineLatest} from "rxjs";
import {LeaveRequestFilter} from "./model/leave-request-filter";
import {Router} from "@angular/router";
import {
  ConfirmationModalProvider
} from "../shared/confirmation-modal/confirmation-modal-provider/confirmation-modal-provider.service";
import {LeaveRequestListComponent} from "./leave-request-list/leave-request-list.component";
import {SnackbarService} from "../shared/snackbar/snackbar.service";
import {CreateLeaveRequest} from "./model/create-leave-request";
import {CreationMode} from "../shared/model/creation-mode";
import {LeaveRequest} from "./model/leave-request";

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

  creationMode: CreationMode = null;

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


  constructor(private leaveRequestService: LeaveRequestService,
              private employeesBsService: EmployeeBsService,
              private confirmationModalProvided: ConfirmationModalProvider,
              private snackbarService: SnackbarService,
              private router: Router) {
  }

  advancedFiltersChange({checked}): void {
    this.leaveRequestTypeControl.setValue('');
    if (!checked) {
      console.log('???')
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
    this.creationMode = CreationMode.ADD;
    this.scrollIntoView(this.createRequestContainer, 'end');
  }

  onEdit(): void {
    this.creationMode = CreationMode.EDIT;
    this.scrollIntoView(this.createRequestContainer, 'end');
  }

  onDelete(): void {
    this.confirmationModalProvided.open()
      .pipe(
        filter(confirmation => !!confirmation),
        switchMap(() => {
          return this.leaveRequestService.delete(this.leaveRequestListComponent.selected?.id);
        })
      )
      .subscribe(() => {
        this.refreshLeaveRequestsSubject$.next();
        this.snackbarService.success('Leave request was successfully deleted');
      })
  }


  onCreationCancel(): void {
    this.creationMode = null;
    this.scrollIntoView(this.requestList);
  }

  onSave(leaveRequest: CreateLeaveRequest): void {

    if (this.creationMode === CreationMode.ADD) {

      this.leaveRequestService.create(leaveRequest)
        .subscribe(_ => {
          this.onSuccessfulSave();
        }, e => console.log(e));

    } else {

      this.leaveRequestService.edit(this.selectedLeaveRequest.id, leaveRequest)
        .subscribe(_ => {
          this.onSuccessfulSave();
          this.leaveRequestListComponent.selected = null;
        }, e => console.log(e));

    }

  }

  private onSuccessfulSave(): void {
    this.snackbarService.success('Request was successfully saved')
    this.refreshLeaveRequestsSubject$.next();
    this.creationMode = null;
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

  private isLeaveRequestSelected(): boolean {
    return !!this.leaveRequestListComponent?.selected;
  }

  isAddButtonDisabled(): boolean {
    return this.isCreationModeSet;
  }

  isEditButtonDisabled(): boolean {
    return !this.isLeaveRequestSelected() || this.isCreationModeSet;
  }

  isDeleteButtonDisabled(): boolean {
    return !this.isLeaveRequestSelected() || this.isCreationModeSet;
  }

  get selectedLeaveRequest(): LeaveRequest {

    if (this.creationMode === CreationMode.EDIT) {
      return this.leaveRequestListComponent?.selected;
    }

    return null;
  }

  get isCreationModeSet(): boolean {
    return this.creationMode != null;
  }

}

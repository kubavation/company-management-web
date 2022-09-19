import { Component, OnInit } from '@angular/core';
import {LeaveRequestService} from "./service/leave-request.service";
import {EmployeeBsService} from "../shared/employee/service/employee-bs.service";
import {filter, startWith, switchMap, tap} from "rxjs/operators";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {LeaveRequestType} from "./model/leave-request-type";
import {KeyValue} from "../shared/model/key-value";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss']
})
export class LeaveRequestsComponent {

  leaveRequestTypeControl = new FormControl(LeaveRequestType.ANNUAL);

  leaveRequestTypeControlValue$ = this.leaveRequestTypeControl.valueChanges
    .pipe(
      startWith(LeaveRequestType.ANNUAL)
  );

  leaveRequestTypes$ = this.leaveRequestService.findLeaveRequestTypes();

  leaveRequests$ = combineLatest([this.employeesBsService.employee$, this.leaveRequestTypeControlValue$])
    .pipe(
      switchMap(([employee, requestType]) => this.leaveRequestService.findByEmployeeId(employee?.id))
    );


  constructor(private leaveRequestService: LeaveRequestService,
              private employeesBsService: EmployeeBsService) {


  }

}

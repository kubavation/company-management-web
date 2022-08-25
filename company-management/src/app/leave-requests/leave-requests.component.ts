import { Component, OnInit } from '@angular/core';
import {LeaveRequestService} from "./service/leave-request.service";
import {EmployeeBsService} from "../shared/employee/service/employee-bs.service";
import {filter, switchMap, tap} from "rxjs/operators";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {LeaveRequestType} from "./model/leave-request-type";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss']
})
export class LeaveRequestsComponent {

  requestTypeForm = this.fb.group({
    requestType: [null, Validators.required]
  })

  leaveRequestTypes$ = this.leaveRequestService.findLeaveRequestTypes().pipe(
     tap((types) => {
       this.requestTypeForm.patchValue({requestType:  types.find(t => t.value  === LeaveRequestType.ANNUAL)})
     })
  );

  leaveRequests$ = this.employeesBsService.employee$.pipe(
    switchMap((employee) => this.leaveRequestService.findByEmployeeId(employee?.id)));


  constructor(private leaveRequestService: LeaveRequestService,
              private employeesBsService: EmployeeBsService,
              private fb: FormBuilder) { }


}

import { Component, OnInit } from '@angular/core';
import {LeaveRequestService} from "./service/leave-request.service";
import {EmployeeBsService} from "../shared/employee/service/employee-bs.service";
import {filter, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss']
})
export class LeaveRequestsComponent {

  leaveRequestTypes$ = this.leaveRequestService.findLeaveRequestTypes();

  leaveRequests$ = this.employeesBsService.employee$.pipe(
    switchMap((employee) => this.leaveRequestService.findByEmployeeId(employee?.id)));


  constructor(private leaveRequestService: LeaveRequestService,
              private employeesBsService: EmployeeBsService) { }


}

import { Component, OnInit } from '@angular/core';
import {LeaveRequestService} from "./service/leave-request.service";

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.scss']
})
export class LeaveRequestsComponent implements OnInit {

  leaveRequests$ = this.leaveRequestService.findByEmployeeId(1);

  constructor(private leaveRequestService: LeaveRequestService) { }

  ngOnInit() {
    console.log('on init')
  }

}

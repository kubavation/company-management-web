import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {LeaveRequest} from "../model/leave-request";

@Component({
  selector: 'app-leave-request-list',
  templateUrl: './leave-request-list.component.html',
  styleUrls: ['./leave-request-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveRequestListComponent {

  @Input() leaveRequests: LeaveRequest[];

  constructor() { }


}

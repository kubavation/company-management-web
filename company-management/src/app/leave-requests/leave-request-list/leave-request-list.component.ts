import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-leave-request-list',
  templateUrl: './leave-request-list.component.html',
  styleUrls: ['./leave-request-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveRequestListComponent {

  @Input() leaveRequests: any[];

  constructor() { }


}

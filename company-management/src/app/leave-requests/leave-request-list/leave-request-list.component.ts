import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {LeaveRequest} from "../model/leave-request";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-leave-request-list',
  templateUrl: './leave-request-list.component.html',
  styleUrls: ['./leave-request-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveRequestListComponent {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  @Input() set leaveRequests(requests: LeaveRequest[]) {
    this.dataSource = new MatTableDataSource<LeaveRequest>(requests);
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.sort;
  }

  @Input() set selectable(isSelectable: boolean) {
    this.isSelectable = isSelectable;
  }

  dataSource: MatTableDataSource<LeaveRequest>;

  public selected: LeaveRequest | undefined;
  isSelectable = true;

  public readonly DATA_TABLE_COLUMNS = ['type', 'dateFrom', 'dateTo', 'days'];

  constructor() {
  }


  onRowClick(leaveRequest) {
    if (this.isSelectable) {
      this.selected = leaveRequest;
    }
  }


}

import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Organisation} from "../../model/Organisation";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-organisation-table',
  templateUrl: './organisation-table.component.html',
  styleUrls: ['./organisation-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationTableComponent {

  @Input()
  set organisations(organisations) {
    this.organisationsDataSource = new MatTableDataSource(organisations);
  }

  @Output()
  public selectedEvent = new EventEmitter<Organisation>();

  selectedRow: Organisation;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns = ['name', 'level'];
  organisationsDataSource: MatTableDataSource<Organisation>;

  constructor() { }

  onRowSelected(row) {
    this.selectedRow = row;
    this.selectedEvent.next(row);
  }

}

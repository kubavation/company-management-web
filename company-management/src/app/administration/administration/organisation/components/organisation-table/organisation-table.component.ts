import {ChangeDetectionStrategy, Component, EventEmitter, Injectable, Input, Output, ViewChild} from '@angular/core';
import {Organisation} from "../../model/Organisation";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-organisation-table',
  templateUrl: './organisation-table.component.html',
  styleUrls: ['./organisation-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationTableComponent {

  organisationsData;
  displayedColumns: string[] = ['name', 'level', 'id'];

  constructor() {
  }

  @Input()
  organisationPath: Organisation[];

  @Input()
  set organisations(organisations: Organisation[]) {
    this.selectedRow = null;
    this.organisationsData = organisations;
  }

  @Output()
  public selectedEvent = new EventEmitter<Organisation>();

  selectedRow: Organisation;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  onRowSelected(row) {
    this.selectedRow = row;
  }

  getChildren() {
    this.selectedEvent.next(this.selectedRow);
  }

  goToParent() {
    this.selectedEvent.next(null);
  }


  getOrganisationPathStr() {
    return this.organisationPath.map(o => o.name).join("/");
  }

}

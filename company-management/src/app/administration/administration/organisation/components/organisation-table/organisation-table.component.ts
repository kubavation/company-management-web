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

  displayedColumns: string[] = ['name', 'shortcut', 'description', 'dateFrom', 'dateTo'];

  @Input()
  organisationPath: Organisation[];

  @Input()
  selectedOrganisation: Organisation;

  @Input()
  organisations: Organisation[];

  @Output()
  public selectedEvent = new EventEmitter<Organisation>();

  @Output()
  public fetchChildrenEvent = new EventEmitter<Organisation>();


  onRowSelected(row) {
    this.selectedEvent.next(row);
  }

  fetchOrganisations() {
    this.fetchChildrenEvent.next(null);
  }

  getOrganisationPathStr() {
    return this.organisationPath.map(o => o.name).join("/");
  }

}

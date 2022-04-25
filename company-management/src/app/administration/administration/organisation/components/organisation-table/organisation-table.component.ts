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

  public dataSource;
  displayedColumns: string[] = ['name', 'level', 'id'];
  private _organisationsData;

  constructor() {
  }


  @Input()
  set organisations(organisations: Organisation[]) {
    console.log(organisations)
    this._organisationsData = organisations;
    this.dataSource = organisations;
  }

  @Output()
  public selectedEvent = new EventEmitter<Organisation>();

  selectedRow: Organisation;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  onRowSelected(row) {
    this.selectedRow = row;
    this.selectedEvent.next(row);
  }

  getChildren() {
    console.log(this.selectedRow.id)
    console.log(this._organisationsData)
    this.dataSource = this.selectedRow.children;
  }

  goToParent() {
    //this.dataSource = this._organisationsData.
  }



}

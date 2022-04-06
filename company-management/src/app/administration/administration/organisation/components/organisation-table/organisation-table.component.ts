import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Organisation} from "../../model/Organisation";
import {DataSource} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-organisation-table',
  templateUrl: './organisation-table.component.html',
  styleUrls: ['./organisation-table.component.scss']
})
export class OrganisationTableComponent implements OnInit {

  @Input()
  set organisations(organisations) {
    this.organisationsDataSource = new MatTableDataSource(organisations);
  }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns = ['name', 'level'];
  organisationsDataSource: MatTableDataSource<Organisation>;

  constructor() { }

  ngOnInit() {
  }

}

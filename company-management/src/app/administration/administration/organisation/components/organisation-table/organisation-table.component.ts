import {ChangeDetectionStrategy, Component, EventEmitter, Injectable, Input, Output, ViewChild} from '@angular/core';
import {Organisation} from "../../model/Organisation";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { DataSource } from '@angular/cdk/table';
import {BehaviorSubject, merge, Observable} from "rxjs";
import {FlatTreeControl} from "@angular/cdk/tree";
import {CollectionViewer, SelectionChange} from "@angular/cdk/collections";
import {map} from "rxjs/operators";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";


//
export interface OrganisationNode {
     item: Organisation;
     children?: OrganisationNode[]
}

interface OrganisationFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-organisation-table',
  templateUrl: './organisation-table.component.html',
  styleUrls: ['./organisation-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationTableComponent {

  private _transformer = (node: OrganisationNode, level: number) => {
    return {
      //expandable: !!node.children && node.children.length > 0,
      expandable: true,
      name: node.item.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<OrganisationFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
  }

  hasChild = (_: number, node: OrganisationFlatNode) => node.expandable;

  @Input()
  set organisations(organisations: Organisation[]) {
    console.log(organisations)

    this.organisationsDataSource = new MatTableDataSource(organisations);
    this.dataSource.data = organisations.map(o => {
      return {item: o, children: []}
    });
  }

  @Output()
  public selectedEvent = new EventEmitter<Organisation>();

  selectedRow: Organisation;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns = ['name', 'level'];
  organisationsDataSource: MatTableDataSource<Organisation>;


  onRowSelected(row) {
    this.selectedRow = row;
    this.selectedEvent.next(row);
  }



  ///




}

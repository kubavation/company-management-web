import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Organisation} from "../../model/Organisation";

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.scss']
})
export class OrganisationDetailsComponent implements OnInit {

  @Input()
  public organisation: Organisation;

  @Output()
  public fetchChildren = new EventEmitter<Organisation>();

  constructor() { }

  ngOnInit() {
    console.log('init')
  }

  public onFetchChildren(parent) {
    this.fetchChildren.next(parent);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Organisation} from "../../model/Organisation";

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.scss']
})
export class OrganisationDetailsComponent implements OnInit {

  @Input()
  public organisation;

  constructor() { }

  ngOnInit() {
    console.log('init')
  }


}

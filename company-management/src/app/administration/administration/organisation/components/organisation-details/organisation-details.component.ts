import {Component, Input, OnInit} from '@angular/core';
import {Organisation} from "../../model/Organisation";

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.scss']
})
export class OrganisationDetailsComponent implements OnInit {

  @Input()
  public organisation: Organisation;

  constructor() { }

  ngOnInit() {
    console.log('init')
  }

}

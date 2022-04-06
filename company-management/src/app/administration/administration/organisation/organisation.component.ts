import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "./service/organisation.service";
import {Observable} from "rxjs";
import {Organisation} from "./model/Organisation";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {

  organisations$: Observable<Organisation[]>
  private DEFAULT_LEVEL = 1;

  constructor(private organisationService: OrganisationService) { }

  ngOnInit() {
    this.organisations$ = this.organisationService.getOrganisationsByLevel(this.DEFAULT_LEVEL);
  }

}

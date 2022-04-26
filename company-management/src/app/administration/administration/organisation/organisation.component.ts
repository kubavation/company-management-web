import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "./service/organisation.service";
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {Organisation} from "./model/Organisation";
import {map, switchMap, tap, withLatestFrom} from "rxjs/operators";

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent {

  organisation: Organisation | null;
  private selectedParentBS = new BehaviorSubject<number | null>(null);

  selectedOrganisationPath: Organisation[] = [];

  organisations$ = this.selectedParentBS
    .pipe(
      switchMap(parentId => this.organisationService.getOrganisationsByParentId(parentId))
    );

  constructor(private organisationService: OrganisationService) { }


  setSelection(organisation) {
    this.organisation = organisation;
    if(this.selectedOrganisationPath.find(o => o.level === this.organisation.level) != null) {
      this.selectedOrganisationPath.pop();
    }
    this.selectedOrganisationPath.push(this.organisation)

  }

  fetchOrganisations() {
    console.log('in fetch')
    console.log(this.organisation)
    if (this.organisation == null) {
      this.selectedParentBS.next(this.selectedOrganisationPath.pop().parentId);
    } else {
      this.selectedParentBS.next(this.organisation.id)
    }
    this.organisation = null;
  }

}

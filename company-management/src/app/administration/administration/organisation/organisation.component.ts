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

  organisation: Organisation;
  private selectedParentBS = new BehaviorSubject<number | null>(null);

  selectedOrganisationPath: Organisation[] = [];

  organisations$ = this.selectedParentBS
    .pipe(
      switchMap(parentId => this.organisationService.getOrganisationsByParentId(parentId))
    );

  constructor(private organisationService: OrganisationService) { }


  setSelection(organisation) {
    if (organisation == null) {
      this.selectedParentBS.next(this.selectedOrganisationPath.pop().parentId);
    } else {
      this.selectedParentBS.next(organisation.id)
      this.selectedOrganisationPath.push(organisation)
    }

  }


}

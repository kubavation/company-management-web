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
export class OrganisationComponent implements OnInit {

  organisations$: Observable<Organisation[]>
  organisation: Organisation;
  private DEFAULT_LEVEL = 1;

  private parentIdSubject = new BehaviorSubject({parentId: null, level: this.DEFAULT_LEVEL});

  constructor(private organisationService: OrganisationService) { }

  ngOnInit() {
    this.organisations$ = this.organisationService.getOrganisationsByParentId(null)
      .pipe(tap(c => console.log(c)));
  }

  setSelection(organisation) {
    this.organisation = organisation
    console.log(organisation)

  }


}

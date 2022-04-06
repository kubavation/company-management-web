import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {AdministrationComponent} from "./administration/administration.component";
import {OrganisationComponent} from "./administration/organisation/organisation.component";

const routes: Route[] = [
  {path: '', component: AdministrationComponent},
  {path: 'organisations', component: OrganisationComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }

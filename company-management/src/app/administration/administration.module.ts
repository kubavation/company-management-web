import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration/administration.component';
import { OrganisationComponent } from './administration/organisation/organisation.component';
import { OrganisationTableComponent } from './administration/organisation/components/organisation-table/organisation-table.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { OrganisationDetailsComponent } from './administration/organisation/components/organisation-details/organisation-details.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AdministrationComponent, OrganisationComponent, OrganisationTableComponent, OrganisationDetailsComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class AdministrationModule { }

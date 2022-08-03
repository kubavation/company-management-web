import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {OrganisationService} from "./administration/administration/organisation/service/organisation.service";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatGridListModule} from '@angular/material/grid-list';
import {LayoutModule} from "./layout/layout.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { BaseModalComponent } from './shared/base-modal/base-modal.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ConfirmationModalProvider } from './shared/confirmation-modal/confirmation-modal-provider/confirmation-modal-provider.service';
import { AbstractBaseModalComponent } from './shared/abstract-base-modal/abstract-base-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseModalComponent,
    ConfirmationModalComponent,
    AbstractBaseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    ConfirmationModalComponent
  ],
  providers: [OrganisationService, ConfirmationModalProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

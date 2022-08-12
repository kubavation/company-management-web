import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseModalComponent} from "./base-modal/base-modal.component";
import {ConfirmationModalComponent} from "./confirmation-modal/confirmation-modal.component";
import {AbstractBaseModalComponent} from "./abstract-base-modal/abstract-base-modal.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';



@NgModule({
  declarations: [
    BaseModalComponent,
    ConfirmationModalComponent,
    AbstractBaseModalComponent,
    EmployeeTableComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SharedModule { }

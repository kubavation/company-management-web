import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseModalComponent} from "./base-modal/base-modal.component";
import {ConfirmationModalComponent} from "./confirmation-modal/confirmation-modal.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';
import { EmployeeComponent } from './employee/employee.component';
import {MatTableModule} from "@angular/material/table";
import { EmployeeModalComponent } from './employee/employee-modal/employee-modal.component';
import {AbstractBaseModalComponent} from "./abstract-base-modal/abstract-base-modal.component";
import { SnackbarComponent } from './snackbar/snackbar/snackbar.component';
import {SnackbarService} from "./snackbar/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    BaseModalComponent,
    ConfirmationModalComponent,
    AbstractBaseModalComponent,
    EmployeeTableComponent,
    EmployeeComponent,
    EmployeeModalComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  entryComponents: [
    EmployeeModalComponent
  ],
  providers: [SnackbarService]
})
export class SharedModule { }

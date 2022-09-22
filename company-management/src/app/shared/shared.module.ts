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
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";



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
    MatSnackBarModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  entryComponents: [
    EmployeeModalComponent
  ],
  providers: [SnackbarService]
})
export class SharedModule { }

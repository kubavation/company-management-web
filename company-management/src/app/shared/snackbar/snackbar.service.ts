import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "./snackbar/snackbar.component";

@Injectable()
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  public success(msg: string): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: msg,
      panelClass: ['success-snackbar']
    });
  }

  public warning(msg: string): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: msg,
      panelClass: ['warning-snackbar']
    });
  }

  public error(msg: string): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: msg,
      panelClass: ['error-snackbar']
    });
  }
}

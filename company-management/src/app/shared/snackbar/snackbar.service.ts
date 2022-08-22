import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "./snackbar/snackbar.component";

@Injectable()
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  public success(info: string): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: info,
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['success-snackbar']
    });
  }
}

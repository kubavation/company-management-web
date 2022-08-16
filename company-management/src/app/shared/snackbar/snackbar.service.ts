import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "./snackbar/snackbar.component";

@Injectable()
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  public success(): void {
    this._snackBar.openFromComponent(SnackbarComponent);
  }
}

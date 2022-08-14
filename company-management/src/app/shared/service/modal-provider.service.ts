import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class ModalProviderService {

  constructor(private dialog: MatDialog) { }

  public open(component, config): void {
    this.dialog.open(component, config);
  }
}

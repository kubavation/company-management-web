import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalProviderService {

  constructor(private dialog: MatDialog) { }

  public open(component, config): Observable<any> {
    console.log(component)
    return this.dialog.open(component, config).afterClosed();
  }
}

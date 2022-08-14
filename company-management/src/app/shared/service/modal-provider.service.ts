import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {BaseModalComponent} from "../base-modal/base-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalProviderService {

  constructor(private dialog: MatDialog) { }

  public open(component, config): Observable<any> {
    return this.dialog.open(component, config).afterClosed();
  }
}

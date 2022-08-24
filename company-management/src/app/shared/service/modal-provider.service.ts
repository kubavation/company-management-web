import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {BaseModalComponent} from "../base-modal/base-modal.component";
import { ComponentType } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ModalProviderService {

  constructor(private dialog: MatDialog) { }

  public open<T extends BaseModalComponent<any>>(component: ComponentType<T>, config?: any, data?: any): Observable<any> {
    const templateRef = this.dialog.open(component, {
      ...config,
      data,
      disableClose: true
    });
    return templateRef.componentInstance.afterSave();
  }
}


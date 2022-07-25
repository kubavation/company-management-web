import {Component, Injectable, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "../confirmation-modal.component";
import {Observable} from "rxjs";
import {ConfirmationModalConfig, DEFAULT_CONFIRMATION_DIALOG_CONFIG} from "../model/confirmation-modal-config";

@Injectable()
export class ConfirmationModalProvider {

  constructor(private dialog: MatDialog) { }

  dialogRef: MatDialogRef<ConfirmationModalComponent>;

  public open(): Observable<boolean> {
    this.dialogRef = this.dialog.open(ConfirmationModalComponent, DEFAULT_CONFIRMATION_DIALOG_CONFIG);
    return this.dialogRef.afterClosed();
  }

  public close(acceptation = false): void {
    this.dialogRef.close(acceptation);
  }

}

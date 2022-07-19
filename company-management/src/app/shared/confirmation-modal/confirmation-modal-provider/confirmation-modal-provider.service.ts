import {Component, Injectable, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "../confirmation-modal.component";
import {Observable} from "rxjs";

@Injectable()
export class ConfirmationModalProvider {

  constructor(private dialog: MatDialog) { }

  dialogRef: MatDialogRef<ConfirmationModalComponent>;

  public open(): Observable<boolean> {
    this.dialogRef = this.dialog.open(ConfirmationModalComponent);
    return this.dialogRef.afterClosed();
  }

  public close(acceptation = false): void {
    this.dialogRef.close(acceptation);
  }

}

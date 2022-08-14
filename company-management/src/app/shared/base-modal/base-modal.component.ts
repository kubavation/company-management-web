import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent<T> {

  @Input() value: T | undefined;

  public readonly title = 'Employees';

  @Input() dialogRef: MatDialogRef<any>;

  constructor() {
  }

  public show(): Observable<T | undefined> {
    return this.dialogRef.afterClosed();
  }

  public onSave(): void {
    this.dialogRef.close(this.value);
  }

  public onCancel(): void {
    this.dialogRef.close(undefined);
  }



}

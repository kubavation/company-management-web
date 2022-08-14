import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";
import {BaseModalConfig} from "./config/base-modal-config";

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent<T> {

  @Input() value: T | undefined;
  @Input() dialogConfig: BaseModalConfig<T>;

  constructor() {
  }

  public onSave(): void {
    this.dialogConfig?.dialogRef.close(this.value);
  }

  public onCancel(): void {
    this.dialogConfig?.dialogRef.close(undefined);
  }



}

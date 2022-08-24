import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {BaseModalConfig} from "./config/base-modal-config";

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent<T> {

  @Input() dialogConfig: BaseModalConfig<T>;
  @Output() save = new EventEmitter<any>();

  @Input() value: any;
  @Input() saveButtonDisabled = false;
  @Input() cancelButtonDisabled = false;

  public valueSubject$ = new Subject<any>();

  constructor() {
    this.valueSubject$ = new Subject<any>();
  }

  public onSave(): void {
    this.save.next(this.value);
  }

  public onCancel(): void {
    this.dialogConfig?.dialogRef.close(undefined);
  }

  public afterSave(): Observable<any> {
    return of();
  }


}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {switchMap, tap} from "rxjs/operators";
import {BaseModalConfig} from "./config/base-modal-config";

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent<T> {

  @Input() dialogConfig: BaseModalConfig<T>;
  @Output() save = new EventEmitter<void>();

  public testSubject$ = new Subject<any>();
  public testSubjectObs$ = this.testSubject$.asObservable();


  constructor() {
    this.testSubject$ = new Subject<any>();
  }

  public onSave(): void {
    this.save.next();
  }

  public onCancel(): void {
    this.dialogConfig?.dialogRef.close(undefined);
  }

  public afterSave(): Observable<any> {
    return of({id: -1})
  }


}

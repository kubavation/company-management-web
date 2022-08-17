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

  @Input() value: T | undefined;
  @Input() dialogConfig: BaseModalConfig<T>;

  testSubject$ = new BehaviorSubject<any>(null);
  testSubjectObs$ = this.testSubject$.asObservable().pipe(tap(c => console.log('mam ' + c)));

  constructor() {
  }

  public onSave(): void {
    console.log('on save')
    //this.dialogConfig?.dialogRef.close(this.value);
    this.testSubject$.next("ELO")
  }

  public onCancel(): void {
    this.dialogConfig?.dialogRef.close(undefined);
  }

  public afterSave(): Observable<any> {

    return this.testSubjectObs$.pipe(
      tap(c => console.log(c)),
      switchMap(() => of({id: 1}))
    )
  }

}

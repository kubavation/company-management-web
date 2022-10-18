import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {KeyValue} from "../../shared/model/key-value";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-leave-request',
  templateUrl: './new-leave-request.component.html',
  styleUrls: ['./new-leave-request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewLeaveRequestComponent {

  @Input() leaveRequestTypes: KeyValue<string>[];

  @Output() cancel = new EventEmitter<void>();

  form = this.fb.group({
    leaveRequestType: [null, Validators.required]
  });

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef) { }


  onSave(): void {
    console.log('on save todo');
  }

  onCancel(): void {
    this.cancel.next();
  }

}

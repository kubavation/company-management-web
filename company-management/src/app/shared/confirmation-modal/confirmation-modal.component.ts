import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ConfirmationModalProvider} from "./confirmation-modal-provider/confirmation-modal-provider.service";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  @Output() private afterAccept: EventEmitter<void> = new EventEmitter<void>();
  @Output() private afterCancel: EventEmitter<void> = new EventEmitter<void>();

  @Input() confirmationMsg = 'Are you sure?';

  constructor(private confirmationModalProvider: ConfirmationModalProvider) { }

  public show(): Observable<boolean> {
    return this.confirmationModalProvider.open();
  }

  public onAccept(): void {
    this.confirmationModalProvider.close(true);
  }

  public onCancel(): void {
    this.confirmationModalProvider.close();
  }
}


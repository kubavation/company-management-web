import {Component, ViewChild} from '@angular/core';
import {ConfirmationModalComponent} from "./shared/confirmation-modal/confirmation-modal.component";
import {
  ConfirmationModalProvider
} from "./shared/confirmation-modal/confirmation-modal-provider/confirmation-modal-provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'company-management';

  constructor(private cc: ConfirmationModalProvider) {

  }

  open() {
    this.cc.open()
      .subscribe(res => console.log(res))
  }

}

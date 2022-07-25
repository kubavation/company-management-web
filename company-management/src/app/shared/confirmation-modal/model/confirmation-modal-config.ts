import {MatDialogConfig} from "@angular/material/dialog";

export class ConfirmationModalConfig extends MatDialogConfig {
  constructor() {
    super();
    this.hasBackdrop = false;
  }
}

export const DEFAULT_CONFIRMATION_DIALOG_CONFIG: ConfirmationModalConfig = {
  width: '400px',
  height: '250px',
  hasBackdrop: false
}

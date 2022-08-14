import {MatDialogRef} from "@angular/material/dialog";

export interface BaseModalConfig<T> {
  title: string;
  dialogRef: MatDialogRef<any>,
  width?: string;
  height?: string;
}

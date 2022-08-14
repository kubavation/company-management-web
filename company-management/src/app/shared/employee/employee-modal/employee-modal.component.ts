import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeModalComponent {

  constructor(public dialogRef: MatDialogRef<EmployeeModalComponent>) {
    this.dialogRef.afterClosed().pipe(tap(c => console.log(c))).subscribe()
  }

}

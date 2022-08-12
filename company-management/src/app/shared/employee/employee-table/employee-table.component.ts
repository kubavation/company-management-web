import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeTableComponent {

  constructor() { }

}

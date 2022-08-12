import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Employee} from "../model/employee";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeTableComponent {

  @Input() employees: Employee[];

  columns: string[] = ['firstName', 'lastName'];

  constructor() { }

}

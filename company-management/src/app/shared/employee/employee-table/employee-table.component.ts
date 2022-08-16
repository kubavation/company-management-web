import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Employee} from "../model/employee";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeTableComponent {

  @Input() set selection(employee: Employee | undefined) {
    this.select(employee);
  }
  @Input() employees: Employee[];
  @Output() onSelected = new EventEmitter<Employee>();

  columns: string[] = ['id', 'firstName', 'lastName'];
  selected: Employee;

  constructor() { }

  select(row: Employee): void {
    this.selected = row;
    this.onSelected.next(this.selected);
  }
}

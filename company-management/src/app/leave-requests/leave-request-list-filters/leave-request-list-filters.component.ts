import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-leave-request-list-filters',
  templateUrl: './leave-request-list-filters.component.html',
  styleUrls: ['./leave-request-list-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveRequestListFiltersComponent {

  @Input() enabled = false;

  form = this.fb.group({
        dateFrom: [null],
        dateTo: [null]
    }
  )

  constructor(private fb: FormBuilder) {
  }


}

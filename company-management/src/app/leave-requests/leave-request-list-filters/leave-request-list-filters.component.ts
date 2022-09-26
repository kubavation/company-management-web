import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {KeyValue} from "../../shared/model/key-value";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-leave-request-list-filters',
  templateUrl: './leave-request-list-filters.component.html',
  styleUrls: ['./leave-request-list-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveRequestListFiltersComponent {

  @Input() enabled = false;
  @Input() requestTypes: KeyValue<string>[];

  public filteredRequestTypes: string[] = [];

  form = this.fb.group({
        dateFrom: [null],
        dateTo: [null],
        requestType: [null]
    }
  )

  constructor(private fb: FormBuilder) {
  }


  search(): void {
    console.log(this.form.value)
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.filteredRequestTypes.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.form.get('requestType').setValue(null);
  }

  remove(type: string): void {
    const index = this.filteredRequestTypes.indexOf(type);

    if (index >= 0) {
      this.filteredRequestTypes.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.filteredRequestTypes.push(event.option.viewValue);
    //this.fruitInput.nativeElement.value = ''; //todo
    this.form.get('requestType').setValue(null);
  }


}

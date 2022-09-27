import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {AbstractControl, FormBuilder} from "@angular/forms";
import {KeyValue} from "../../shared/model/key-value";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {map, startWith, tap} from "rxjs/operators";
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-leave-request-list-filters',
  templateUrl: './leave-request-list-filters.component.html',
  styleUrls: ['./leave-request-list-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveRequestListFiltersComponent {

  @Input() enabled = false;
  @Input() requestTypes: KeyValue<string>[];

  @Output() onSearch = new EventEmitter<any>();

  public filteredRequestTypes: KeyValue<string>[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('requestTypeInput') requestTypeInput: ElementRef<HTMLInputElement>;

  form = this.fb.group({
        dateFrom: [null],
        dateTo: [null],
        requestType: [null]
    }
  )

  filteredTypes$ = this.form.get('requestType').valueChanges
    .pipe(
      startWith(null),
      map(_ => _ instanceof Object ? _.key : _),
      map((val: string | null) => val ? this._filter(val) : this.requestTypes.slice())
    )

  constructor(private fb: FormBuilder) {
  }


  search() {
     const obj = {
      ...this.form.value,
      requestType: this.filteredRequestTypes
    }

    this.onSearch.next(obj);
  }

  clearFilters() {
    this.form.reset();
    this.filteredRequestTypes = [];
  }


  add(event: MatChipInputEvent): void {

    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.setFirstAvailableValue(value);
    }

    if (input) {
      input.value = '';
    }

    this.requestTypeControl.setValue(null);
  }

  setFirstAvailableValue(val: string): void {

    let index = 0;

    while(true) {
      const res = this.requestTypes
        .filter(type => type.key.toLowerCase().includes(val.toLowerCase()))[index];

      if (!res) {
        return;
      }

      if (!this.filteredRequestTypes.includes(res)) {
        this.filteredRequestTypes.push(res);
        return;
      }

      index++;
    }
  }

  remove(type: KeyValue<string>): void {
    const index = this.filteredRequestTypes.indexOf(type);

    if (index >= 0) {
      this.filteredRequestTypes.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    if (!this.filteredRequestTypes.includes(event.option.value)) {
      this.filteredRequestTypes.push(event.option.value);
    }

    this.requestTypeInput.nativeElement.value = '';
    this.requestTypeControl.setValue(null);
  }

  private _filter(val: string): KeyValue<string>[] {
    const filterValue = val.toLowerCase();
    return this.requestTypes
        .filter(({key}) => key.toLowerCase().includes(filterValue));
  }

  allRequestTypesChosen(): boolean {
    return this.requestTypes.length == this.filteredRequestTypes.length;
  }

  private get requestTypeControl(): AbstractControl {
    return this.form.get('requestType');
  }

}

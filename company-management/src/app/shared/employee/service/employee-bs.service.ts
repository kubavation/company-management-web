import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeBsService {
    private employeeSubject = new BehaviorSubject<Employee>(null);
    public employee$ = this.employeeSubject.asObservable();

    public setValue(value: Employee): void {
      this.employeeSubject.next(value);
    }

    public currentValue(): Employee | undefined {
      return this.employeeSubject.getValue();
    }
}

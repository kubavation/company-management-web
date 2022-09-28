import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeBsService {
    private employeeSubject = new ReplaySubject<Employee>(1);
    public employee$ = this.employeeSubject.asObservable();

    private currentEmployee: Employee | null;

    public setValue(value: Employee): void {
      if(!!value) {
        this.currentEmployee = value;
        this.employeeSubject.next(value);
      }
    }

    public getValue(): Employee {
      return this.currentEmployee;
    }
}


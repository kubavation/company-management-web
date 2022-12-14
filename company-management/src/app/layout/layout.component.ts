import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {LayoutService} from "./service/layout.service";
import {MatSidenav} from "@angular/material/sidenav";
import {map, switchMap, tap} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeModalComponent} from "../shared/employee/employee-modal/employee-modal.component";
import {ModalProviderService} from "../shared/service/modal-provider.service";
import {EmployeeBsService} from "../shared/employee/service/employee-bs.service";
import {EmployeeService} from "../shared/employee/service/employee.service";
import {Employee} from "../shared/employee/model/employee";
import {Route, Router} from "@angular/router";
import {AuthService} from "../keycloak/service/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  menuOptions$ = this.employeeBSService.employee$
    .pipe(
      tap(_ => console.log(_)),
      switchMap((employee) => this.layoutService.getMenuOptions()), //TODO FIX WITH PREVILIGES
      tap(_ => this.openSidenav())
    )

  employees$ = this.employeeService.findAll()
    .pipe(
      tap((employees) => this.searchEmployee(employees))
    ); //FIXME (connect with auth)




  constructor(private layoutService: LayoutService,
              private modalProviderService: ModalProviderService,
              private employeeService: EmployeeService,
              private router: Router,
              public employeeBSService: EmployeeBsService,
              private authService: AuthService) {
    this.router.navigate(['']);
  }


  openSidenav(): void {
    this.sidenav.open();
  }

  searchEmployee(employees?: Employee[]): void {
    this.modalProviderService.open(EmployeeModalComponent, {
      width: '700px',
      height: '400px',
    }, employees).subscribe(employee => {
      this.employeeBSService.setValue(employee)
    })
  }

  logout(): void {
    this.authService.logout();
  }
}

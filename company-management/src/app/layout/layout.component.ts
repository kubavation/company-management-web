import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {LayoutService} from "./service/layout.service";
import {MatSidenav} from "@angular/material/sidenav";
import {tap} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeModalComponent} from "../shared/employee/employee-modal/employee-modal.component";
import {ModalProviderService} from "../shared/service/modal-provider.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  menuOptions$ = this.layoutService.getMenuOptions().pipe(
    tap(() => this.openSidenav())
  );

  constructor(private layoutService: LayoutService,
              private modalProviderService: ModalProviderService) { }


  openSidenav(): void {
    this.sidenav.open();
  }

  searchEmployee(): void {
    console.log('opening')
    this.modalProviderService.open(EmployeeModalComponent, {
      width: '500px',
      height: '400px'
    })
  }


}

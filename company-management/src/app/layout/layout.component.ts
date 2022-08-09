import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {LayoutService} from "./service/layout.service";
import {MatSidenav} from "@angular/material/sidenav";
import {tap} from "rxjs/operators";

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

  constructor(private layoutService: LayoutService) { }


  openSidenav(): void {
    this.sidenav.open();
  }


}

import { Component, OnInit } from '@angular/core';
import {LayoutService} from "./service/layout.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private layoutService: LayoutService) { }

  menuOptions$ = this.layoutService.getMenuOptions();

}
